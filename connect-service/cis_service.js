// Objective : complete REST API (get/put/post/delete)
// How to run : nodemon cis_service.js 

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
const router = require('./db_query');
// const bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('combined')) // combined , short
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)


app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

