// Objective : apply basic route

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
app.use(morgan('short')) // combined , short

var pool = require('pg').Pool;

var router = require('./pg_query2');
app.use(router)

app.listen(port, () => {
    console.log('todo list RESTful API server started on: ' + port);
});

