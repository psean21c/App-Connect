// How to run : $ node .\connect-db.js
var Pool = require('pg').Pool;
var config = {
    host: 'localhost',
    user: 'mycampus',
    password: 'mycampus',
    database: 'school',
    port: '5433'

};

var postgres = new Pool(config);

async function get_hits(){
    console.log('called');
    var response = await postgres.query("select * from students");
    console.log(response.rows);
}

get_hits();