var express = require('express');
var app = express();
var http = require('http');
var url = require('url');


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   console.log("making rest call");
    //This code will be used to make get calls
	// Options to be used by request 
	var options = {
	   host: 'localhost',
	   port: '8080',
	   path: '/UserManagement/hb/AuthorService/authors'  
	};
	var body = '';
	// Callback function is used to deal with response
	var callback = function(response) {
	   // Continuously update stream with data
	   //var body = '';
	   response.on('data', function(data) {
		  body += data;
		  console.log("logging data");
		  console.log(data);
		  res.send(body);
	   });
	   
	   response.on('end', function() {
		  // Data received completely.
		  console.log(body);
	   });
	}
   // Make a request to the server
	var req = http.request(options, callback);
	req.end();
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match' );
})

var server = app.listen(8099, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})