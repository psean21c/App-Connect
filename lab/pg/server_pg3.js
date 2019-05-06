// Objective : make 1st GET() method

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
app.use(morgan('short')) // combined , short

var pool = require('pg').Pool;

var router = require('./pg_query3');
app.use(router)



app.listen(port, () => {
    console.log('RESTful API server(v-01) started on: ' + port);
});

