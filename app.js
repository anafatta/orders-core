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
require('./app/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness * .'+ req.param('ven'),
}));


//AUTHENTICATION
SALT_WORK_FACTOR = 12;
var passport = require('passport')
  , passportConfig = require('./config/passportConfig');

  app.use(express.cookieParser());
  app.use(express.session({secret:'mybestsecret'}))//put this in environment variable
  app.use(passport.initialize())
  app.use(passport.session())
  

module.exports = app;