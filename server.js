// How to run: nodemon {filename}.js

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
app.use(morgan('short')) // combined , short

var pool = require('pg').Pool;


var connection = new pool({
    host: 'localhost',
    user: 'campus1',
    password: 'campus1',
    database: 'institute1',
    port: '5433'

});

// GET all
app.get('/classes/',(req,res) =>{
    console.log("Fetching all classes:[" + req + "]")

    const queryString = "SELECT * FROM classes"
    var response = connection.query(
        queryString,(err, rows, fields) => {
            console.log("I think we fetched users successfully-2")
            console.log("the data=[" + rows.rows + "]")
            res.json(rows.rows)
    })
})

// GET one
app.get('/class/:id',(req,res) =>{
    const classId = req.params.id
    console.log("Fetching class:[" + classId + "]")
    const queryString = "SELECT * FROM classes where id = $1"
    connection.query(queryString,[classId],(err, rows, fields) => {
            console.log("the data=[" + rows.rows + "], fields[" + fields + "]")
            res.json(rows.rows)
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

