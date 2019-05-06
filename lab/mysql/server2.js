var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined')) // combined , short

// GET all
app.get('/users/',(req,res) =>{
    console.log("Fetching all users:[" + req + "]")
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'math6461'
    })
    // the data will be undefined if no database name [connect1]
    const queryString = "SELECT * FROM connect1.users"
    connection.query(queryString, [], (err,rows,fields)=> {
        console.log("I think we fetched users successfully")
        console.log("the data=[" + rows + "]")
        res.json(rows)
    })
})

// GET one
app.get('/user/:id',(req,res) =>{
    console.log("Fetching user with id:" + req.params.id)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'math6461'
    })
    const userId = req.params.id
    //I think we fetched user successfully [undefined]
    //const queryString = "SELECT * FROM users where id = ?"
    const queryString = "SELECT * FROM connect1.users where id = ?"
    connection.query(queryString, [userId], (err,rows,fields)=> {
        console.log("I think we fetched user successfully [" + rows + "]")
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

