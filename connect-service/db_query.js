const express = require('express')
var pool = require('pg').Pool;
const router = express.Router()

function getConnection(){
    return pool({
        host: 'localhost',
        user: 'mycampus',
        password: 'mycampus',
        database: 'school',
        port: '5433',
        connectionList: 10
    
    })
}

// GET all
router.get('/students/',(req,res) =>{
    console.log("Fetching all classes:[" + req + "]")

    const queryString = "SELECT * FROM students"
    getConnection().query(
        queryString,(err, rows, fields) => {
            console.log("I think we fetched users successfully")
            console.log("the data=[" + rows.rows + "]")
            res.json(rows.rows)

            }
    )
})

// GET one
router.get('/student/:id',(req,res) =>{
    const id = req.params.id
    console.log("Fetching class:[" + id + "]" + req)
    const queryString = "SELECT * FROM students where id = $1"
    getConnection().query(queryString,[id],(err, rows, fields) => {
            console.log("the data=[" + rows.rows + "], fields[" + fields + "]")
            res.json(rows.rows)
    })
})

// POST
router.post('/addStudent', function(req,res) {
    console.log("add Class req=" + req + ":param=" + req.params + ":body=" + req.body);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const country = req.body.country;
    console.log("Fetching firstname:[" + firstname + "]" + ",lastname=[" + lastname + "], country=[" + country + "]" )    
    const queryString = "INSERT INTO students(firstname,lastname, country) VALUES($1,$2, $3)";
    getConnection().query(queryString,[firstname,lastname,country],(err, client, fields) => {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("the data=[" + client.rows + "], fields[" + fields + "]");
        var message = "successfully added";
        res.json(message);
    })
})



// PUT
router.put('/updateStudent/:id', (req, res) => {
    const id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const country = req.body.country;
    console.log("Fetching id[" + id + "],firstname=[" + firstname + "], lastname=[" + lastname + "],country=" + country + "]" )    
    const queryString = "UPDATE students SET firstname = $2, lastname = $3, country = $4 WHERE id =$1";
    getConnection().query(queryString,[id, firstname,lastname,country],(err, client, fields) => {
        if(err) {
            console.error('error fetching client from pool', err);
            return res.status(404).end();
        }
        console.log("the data=[" + client.rows + "], fields[" + fields + "]");
        var message = "successfully updated";
        res.json(message);
    })
})

// DELETE
router.delete('/delStudent/:id', (req, res) => {
    const id = req.params.id;
    console.log("Trying to delete the class #:[" + id + "]" )    
    const queryString = "DELETE FROM students WHERE id =$1";
    getConnection().query(queryString,[id],(err, client, fields) => {
        if(err) {
            console.error('error fetching client from pool', err);
            return res.status(404).end();
        }

        // res.json(message);
        return res.status(200).end();
    })
})

// Root
router.get("/",(req,res) => {
    console.log("Responding to root route")
    res.send("Hello from CIS Root Service")
})

module.exports = router