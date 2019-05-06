// Objective : CORS issue
// Access to XMLHttpRequest at 'http://localhost:3000/classes' 
// from origin 'http://localhost:4201' has been blocked by CORS policy
// : No 'Access-Control-Allow-Origin' header is present on the requested resource.
// research : https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
const router = require('./pg_query7');
const bodyParser = require('body-parser')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(morgan('combined')) // combined , short
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

app.listen(port, () => {
    console.log('RESTful API server(v-06) started on: ' + port);
});

