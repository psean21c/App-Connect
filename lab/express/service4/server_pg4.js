// How to run
// 1)
// $ nodemon server_pg4.js
// 2)
// $ curl -X GET --url "http://localhost:3030/students"
// $ curl -X GET -H "Accept: application/json" -H "Content-type: application/json" --url "http://localhost:3030/"

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3030;


var router = require('./pg_query4');
app.use(router)

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

