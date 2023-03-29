# Dirty Tracklist Formatter

Quick 'n dirty Rekordbox tracklist formatter. 

Live version here: [https://dirtybriefs.net/track-formatter/](https://dirtybriefs.net/track-formatter/)

Takes Rekordbox tracklists, such as:
```tsv
#	Artwork	Track Title	Artist	Remixer	Mix Name	Album	Genre	BPM	Rating	Time	Key	Date Added
1		Garden Of The Gods	Hausman, Discognition, Lumynesynth		Original Mix	Higher Peaks	Progressive House	122.00	     	04:21	Bb	2023-02-19
2		Wild Skies	Eli & Fur		Original Mix	Carbon	Organic House / Downtempo	98.00	     	03:24	Eb	2023-02-19
3		Menuda	PAAX (Tulum)		Original Mix	Hypnos	Organic House / Downtempo	210.00	     	07:12	Eb	2023-02-19
4		Atlas	Stefan Obermaier	PAAX (Tulum)	PAAX (Tulum) Remix	Atlas	Organic House / Downtempo	123.00	     	07:46	G	2023-02-19
5		Back To The Roots	Amonita, Makebo		Extended Mix	Back To The Roots	Organic House / Downtempo	122.00	     	09:43	A	2023-02-19
6		Zoo	DSF		Original Mix	Feel Like Home EP	Organic House / Downtempo	123.00	     	07:32	D	2023-02-19
7		Hericium	John Cosani		Original Mix	Hericium	Progressive House	120.00	     	07:56	D	2022-07-15
```

and formats them for posting on SoundCloud / Mixcloud / Youtube etc:

```txt
1. Hausman, Discognition, Lumynesynth – Garden Of The Gods
2. Eli & Fur – Wild Skies
3. PAAX (Tulum) – Menuda
4. Stefan Obermaier – Atlas (PAAX (Tulum) Remix)
5. Amonita, Makebo – Back To The Roots
6. DSF – Zoo
7. John Cosani – Hericium
```

* Supports custom formatting, custom regex token removal, and zero-padding track numbers.

## Run the app locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/track-formatter](http://localhost:3000/track-formatter) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Create React App

This thing was created as an excuse to try create-react-app. So, here's some other stuff related to that.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
