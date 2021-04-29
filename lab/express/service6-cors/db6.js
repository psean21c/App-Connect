const express = require('express')
const router = express.Router()
const fetch = require("node-fetch")
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

    // fetch("file.json")
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data.sentence)
    //     document.querySelector("#debug").innerHTML = data.sentence
    // })
    const queryString = "SELECT firstname,lastname FROM students"
    client.query(queryString, (err, res) => {
        if (err){
            console.log(err.stack)
        } else {
            console.log(res.rowCount + "," + res.rows)
            console.log(res.rows.values)
        }
      })
})

module.exports = router