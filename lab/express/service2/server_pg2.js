// How to check from client side.
// example
// $ curl -X GET -H "Accept: application/json" -H "Content-type: application/json" --url "http://localhost:3000/"
// $ curl -X GET --url "http://localhost:3000/router"

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


app.get('/router', (req,res) => {
    console.log('1111')
    res.send('router \n')
    res.end()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

