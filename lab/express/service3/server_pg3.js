// 
// example
// $ curl -X GET -H "Accept: application/json" -H "Content-type: application/json" --url "http://localhost:3000/"
// $ curl -X GET --url "http://localhost:3000/students"

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


var router = require('./pg_query3');

app.use(router)
app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

