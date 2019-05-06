// How to run: nodemon server3.js
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const mysql = require('mysql')


//
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'math6461'
})

// GET all
app.get('/users/',(req,res) =>{
    console.log("Fetching all users:[" + req + "]")
    // the data will be undefined if no database name [connect1]
    const queryString = "SELECT * FROM connect1.users"
    connection.query(queryString, [], (err,rows,fields)=> {
        // console.log("I think we fetched users successfully")
        // console.log("the data=[" + rows + "]")
        res.json(rows)
    })
})

// Root
app.get("/",(req,res) => {
    console.log("Responding to root route")
    res.send("Hello from ROOOOT")
})


app.listen(port, () => {
    console.log('todo list RESTful API server started on: ' + port);
});

