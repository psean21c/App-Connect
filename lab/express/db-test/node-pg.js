const { Pool, Client } = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'mycampus',
    password: 'mycampus',
    database: 'school',
    port: '5432'
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
    host: 'localhost',
    user: 'mycampus',
    password: 'mycampus',
    database: 'school',
    port: '5432'
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
