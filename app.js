const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require ('cors');
const path = require('path');

// Set up the express app
const app = express();
app.use(cors())

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , '../public')));
console.log('Path :' + path.join(__dirname , 'public'))

// Require our routes into the application.
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness * .'+ req.param('ven'),
}));

module.exports = app;