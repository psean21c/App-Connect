const express = require('express')
var pool = require('pg').Pool;
const router = express.Router()

function getConnection(){
    return pool({
        host: 'localhost',
        user: 'campus1',
        password: 'campus1',
        database: 'institute1',
        port: '5433',
        connectionList: 10
    
    })
}

// GET all
router.get('/classes/',(req,res) =>{
    console.log("Fetching all classes:[" + req + "]")

    const queryString = "SELECT * FROM classes"
    getConnection().query(
        queryString,(err, rows, fields) => {
            console.log("I think we fetched users successfully")
            console.log("the data=[" + rows.rows + "]")
            res.json(rows.rows)
            }
    )
})

// GET one
router.get('/class/:id',(req,res) =>{
    const classId = req.params.id
    console.log("Fetching class:[" + classId + "]" + req)
    const queryString = "SELECT * FROM classes where id = $1"
    getConnection().query(queryString,[classId],(err, rows, fields) => {
            console.log("the data=[" + rows.rows + "], fields[" + fields + "]")
            res.json(rows.rows)
    })
})

// POST
router.post('/addClass', function(req,res) {
    console.log("add Class req=" + req + ":param=" + req.params + ":body=" + req.body);
    console.log(req.body.cname +  ":" + req.body.cdescription);
    const cname = req.body.cname;
    const cdescription = req.body.cdescription;
    console.log("Fetching cname:[" + cname + "]" + ",cdescription=[" + cdescription + "]" )    
    const queryString = "INSERT INTO classes(cname,cdescription) VALUES($1,$2)";
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
router.put('/addClass/:id', (req, res) => {
    const cid = req.params.id;
    const cname = req.body.cname;
    const cdescription = req.body.cdescription;
    console.log("Fetching cid:[" + cid + "],cname=[" + cname + ",]cdescription=[" + cdescription + "]" )    
    const queryString = "UPDATE classes SET cname = $2, cdescription = $3 WHERE id =$1";
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
router.delete('/addClass/:id', (req, res) => {
    const cid = req.params.id;
    console.log("Trying to delete the class #:[" + cid + "]" )    
    const queryString = "DELETE FROM classes WHERE id =$1";
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