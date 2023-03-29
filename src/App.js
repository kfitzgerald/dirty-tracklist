// import logo from './logo.svg';
import './App.scss';
import {Alert, Form} from "react-bootstrap";
import {useCallback, useState} from "react";
import {parse} from 'csv-parse/browser/esm/sync';

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(null);
    const [format, setFormat] = useState('{index}. {Artist} – {Track Title} ({Mix Name})');
    const [stripPatterns, setStrippers] = useState('\\s+\\(Original Mix\\)\n\\s+\\(Extended Mix\\)\n\\s+Extended\n\\s+\\(\\)')
    const [zeroPadEnabled, setZeroPad] = useState(true);

    const updateOutput = useCallback((text, format, stripPatterns, zeroPadEnabled) => {
        try {
            // Parse the TSV from Rekordbox
            const parsed = parse(text, {
                delimiter: '\t',
                trim: true,
                columns: true
            });

            // Show the output in the console for debugging / reference
            console.log('Parsed Tracks', parsed);

            // Setup pattern formatter replacer
            const formatter = (format, track) => format.replace(/{([^}]+)}/g, (_, key) => track[key] || '');

            // Get the number of digits needed for zero-padding
            const trackDigits = (parsed.length+"").length;

            // Format each track
            const formatted = parsed.map((t, index) => {

                // Set the track index number (not what RB says)
                t.index = index + 1;

                // Zero pad the index / RB values
                if (zeroPadEnabled) {
                    t.index = String(t.index).padStart(trackDigits, '0');
                    t['#'] = String(t['#']).padStart(trackDigits, '0'); // TODO - this should really be the last RB track # value, but i'm lazy
                }

                // Replace format tokens with track values
                let res = formatter(format, t);

                // Execute each strip pattern in order
                const patterns = stripPatterns.trim().split('\n').map(p => new RegExp(p, 'gi'));
                patterns.forEach(p => {
                    res = res.replace(p, '');
                });

                // Clean the formatted track
                return res.trim();

            }).join('\n');

            // Set the output and clear any errors since everything was successful
            setOutput(formatted);
            setError(null);
        } catch (err) {
            // Something failed - parsing or regex pattern was poop - notify on DOM and console
            console.error(err);
            setError(err);
        }
    }, [setOutput, setError]);

    // Input change handler
    const handleChange = useCallback((e) => {
        setInput(e.target.value);
        updateOutput(e.target.value, format, stripPatterns, zeroPadEnabled);
    }, [format, stripPatterns, zeroPadEnabled, updateOutput])

    // Format change handler
    const handleFormatChange = useCallback(e => {
        setFormat(e.target.value);
        updateOutput(input, e.target.value, stripPatterns, zeroPadEnabled);
    }, [input, stripPatterns, zeroPadEnabled, updateOutput]);

    // Regex change handler
    const handleStripChange = useCallback(e => {
        setStrippers(e.target.value);
        updateOutput(input, format, e.target.value, zeroPadEnabled);
    }, [input, format, zeroPadEnabled, updateOutput]);

    // Zero pad checkbox handler
    const handleZeroPadChange = useCallback(e => {
        setZeroPad(e.target.checked);
        updateOutput(input, format, stripPatterns, e.target.checked);
    }, [input, format, stripPatterns, updateOutput]);

    return (
        <div className="App">
            <div className="rb-container">
                <div className="rekordbox-input">
                    <Form.Label htmlFor="rb-input">Rekordbox Playlist Text</Form.Label>
                    <Form.Control as={"textarea"}
                                  name="rb-input"
                                  value={input}
                                  onChange={handleChange}
                    />
                </div>
                <div className="formatted-output">
                    <Form.Label htmlFor="rb-output">Formatted Output</Form.Label>
                    <Form.Control as={"textarea"}
                                  name="rb-output"
                                  value={output}
                                  onChange={(e) => {
                                      setOutput(e.target.value);
                                  }}
                    />
                </div>
            </div>
            <aside className="sidebar">
                <Form.Group controlId="format">
                    <Form.Label>Track Format</Form.Label>
                    <Form.Control name="format"
                                  value={format}
                                  onChange={handleFormatChange}
                    />
                </Form.Group>
                <Form.Group controlId="strippers">
                    <Form.Label>Strip Patterns</Form.Label>
                    <Form.Control as={"textarea"}
                                  rows={"5"}
                                  name="strippers"
                                  value={stripPatterns}
                                  onChange={handleStripChange}
                    />
                    <Form.Text>* <a href="https://regexr.com/" target="_blank" rel="noreferrer">regex</a> applied after tack is formatted</Form.Text>
                </Form.Group>
                <Form.Group controlId="pad-numbers">
                    <Form.Check name="pad-numbers"
                                type="checkbox"
                                label="Zero-pad track numbers"
                                checked={zeroPadEnabled}
                                onChange={handleZeroPadChange}
                    />
                </Form.Group>
                {error && (
                    <Alert variant="danger">
                        {error.message || error}
                    </Alert>
                )}
            </aside>
        </div>
    );
}

export default App;
