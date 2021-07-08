// How to run : $ node .\connect-db.js
// make sure if port is correct (windows=5433, mac=5432)
var Pool = require('pg').Pool;
var config = {
    host: 'localhost',
    user: 'mycampus',
    password: 'mycampus',
    database: 'school',
    port: '5432'

};

var postgres = new Pool(config);

async function get_hits(){
    console.log('called');
    var response = await postgres.query("select * from students");
    console.log(response.rows);
}

get_hits();