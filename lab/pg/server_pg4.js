// Objective : make get/post

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
var router = require('./pg_query4');
const bodyParser = require('body-parser')

app.use(morgan('short')) // combined , short

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(router)

app.listen(port, () => {
    console.log('RESTful API server(v-04) started on: ' + port);
});

