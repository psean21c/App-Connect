// Objective : complete REST API (get/put/post/delete)

const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
const router = require('./pg_query5');
const bodyParser = require('body-parser')

app.use(morgan('combined')) // combined , short
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router)

app.listen(port, () => {
    console.log('RESTful API server(v-05) started on: ' + port);
});

