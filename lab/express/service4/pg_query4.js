const express = require('express')
const router = express.Router()

const { Pool, Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'mycampus',
    password: 'mycampus',
    database: 'school',
    port: '5432'
})
client.connect()

// route-1
router.get('/students/',(req,res) =>{
    console.log("Fetching all classes:[" + req + "]")
    res.send('your ip = ' + req.originalUrl + '\n')

    // const queryString = "SELECT NOW()"
    const queryString = "SELECT firstname,lastname FROM students"
    client.query(queryString, (err, res) => {
        if (err){
            console.log(err.stack)
        } else {
            console.log(res.rowCount)
            // console.log(res.rows)
        }
      })
})

module.exports = router