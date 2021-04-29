// Objective : CORS issue
// https://github.com/expressjs/cors

// Access to XMLHttpRequest at 'http://localhost:3000/classes' 
// from origin 'http://localhost:4201' has been blocked by CORS policy
// : No 'Access-Control-Allow-Origin' header is present on the requested resource.
// research : https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/

// How to run
// 1)
// $ nodemon cors_server.js
// 2)
// $ curl -X GET --url "http://localhost:3030/students"


var express = require('express'),
  app = express(),
  port = process.env.PORT || 3030;


var router = require('./db6');
app.use(router)

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({data:[1,2,3,4]})
  // next();
});


app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});


