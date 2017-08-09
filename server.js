// Installs the libraries for use below
const express = require('express'); // Allows me to have routing functions
const morgan = require('morgan'); // Morgan logs requests to server
const bodyParser = require('body-parser'); // Allows me to read data from front end text
const mongoose = require('mongoose'); // Allows me to communicate with mongoDB
const hbs = require('hbs'); // This is a template engine for data rendering in HTML
const expressHbs = require('express-handlebars'); // This allows me to extend hbs and create layout files

const app = express(); // This allows me to instantiate express

// Below is all the middle ware for this application

// Setting up the template engine for handle bars layout
app.engine('.hbs', expressHbs({defaultLayout:'layout', extname: '.hbs'})); // This builds the main layout page

app.set('view engine', 'hbs'); // sets the template engine
app.use(express.static(__dirname + '/public')); // This allows me to serve static files from the public folder
app.use(morgan('dev')); // This middle ware allows me to log to console
app.use(bodyParser.json()); // This allows me to read json data
app.use(bodyParser.urlencoded({extended: true})); //This allows me to read unicode type data

const mainRoutes = require('./routes/main'); // This is a local library so I must include the exact path

app.use(mainRoutes);

// Below allows me to establish a port for my server to run on
app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log('Connected to server');
});
