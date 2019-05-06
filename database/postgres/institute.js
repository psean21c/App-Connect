var Pool = require('pg').Pool;
var config = {
    host: 'localhost',
    user: 'campus1',
    password: 'campus1',
    database: 'institute1',
    port: '5433'

};

var postgres = new Pool(config);

async function get_hits(){
    var response = await postgres.query("select * from classes");
    console.log(response.rows);
}

get_hits();