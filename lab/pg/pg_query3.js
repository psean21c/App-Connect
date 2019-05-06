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
    var response = getConnection().query(
        queryString,(err, rows, fields) => {
            console.log("I think we fetched users successfully-2")
            console.log("the data=[" + rows.rows + "]")
            res.json(rows.rows)
            }
    )
})

module.exports = router