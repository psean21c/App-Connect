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
router.get('/rooms/',(req,res) =>{
    console.log("Fetching all classes:[" + req + "]")

    const queryString = "SELECT * FROM room"
    getConnection().query(
        queryString,(err, rows, fields) => {
            console.log("I think we fetched users successfully")
            console.log("the data=[" + rows.rows + "]")
            res.json(rows.rows)
            }
    )
})

// GET one
router.get('/room/:id',(req,res) =>{
    const classId = req.params.id
    console.log("Fetching class:[" + classId + "]" + req)
    const queryString = "SELECT * FROM room where id = $1"
    getConnection().query(queryString,[classId],(err, rows, fields) => {
            console.log("the data=[" + rows.rows + "], fields[" + fields + "]")
            res.json(rows.rows)
    })
})

// POST
router.post('/addRoom', function(req,res) {
    console.log("add Class req=" + req + ":param=" + req.params + ":body=" + req.body);
    console.log(req.body.cname +  ":" + req.body.cdescription);
    const cname = req.body.cname;
    const cdescription = req.body.cdescription;
    console.log("Fetching cname:[" + cname + "]" + ",cdescription=[" + cdescription + "]" )    
    const queryString = "INSERT INTO room(cname,cdescription) VALUES($1,$2)";
    getConnection().query(queryString,[cname,cdescription],(err, client, fields) => {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        console.log("the data=[" + client.rows + "], fields[" + fields + "]");
        var message = "successfully added";
        res.json(message);
    })
})



// PUT
router.put('/updateRoom/:id', (req, res) => {
    const cid = req.params.id;
    const cname = req.body.cname;
    const cdescription = req.body.cdescription;
    console.log("Fetching cid:[" + cid + "],cname=[" + cname + ",]cdescription=[" + cdescription + "]" )    
    const queryString = "UPDATE room SET cname = $2, cdescription = $3 WHERE id =$1";
    getConnection().query(queryString,[cid, cname,cdescription],(err, client, fields) => {
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
router.delete('/delRoom/:id', (req, res) => {
    const cid = req.params.id;
    console.log("Trying to delete the class #:[" + cid + "]" )    
    const queryString = "DELETE FROM room WHERE id =$1";
    getConnection().query(queryString,[cid],(err, client, fields) => {
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
    res.send("Hello from ROOOOT")
})

module.exports = router