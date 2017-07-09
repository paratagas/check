/**
 * Main server logic
 * 
 * @author Evgeni Sviridenko <paratagas@gmail.com>
 * @version 0.0.1
 * @copyright Evgeni Sviridenko 2017
 */

// common modules:
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = 4488;

// use to parse json data
app.use(bodyParser.json());

// create path aliases to use them in index.html file
// otherwise the assets in it will not work and icons will not be shown
// scheme:
// app.use('/my_path_alias', express.static(path.join(__dirname, '/path_to_where/my_assets_are')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/skins', express.static(path.join(__dirname, '/codebase/skins')));
app.use('/bundle', express.static(path.join(__dirname, '/')));
app.use('/codebase', express.static(path.join(__dirname, '/codebase')));
app.use('/i18n', express.static(path.join(__dirname, '/codebase/i18n')));
app.use('/fonts', express.static(path.join(__dirname, '/codebase/fonts')));

/**
 * Get index page
 *
 * @param {string} URL
 * @param {function} Callback
 */
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

/**
 * Listen to server with specified port
 *
 * @param {string} Port
 * @param {function} Callback
 */
app.listen(port, () => {
	// open browser on http://localhost:4488
	console.log('Server is running on http://localhost:' + port);
});
