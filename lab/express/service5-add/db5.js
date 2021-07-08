//   https://www.youtube.com/watch?v=_Mun4eOOf2Q

const Pool = require("pg").Pool;

const pool = new Pool({
    host: 'localhost',
    user: 'mycampus',
    password: 'mycampus',
    database: 'school',
    port: '5432'
});

module.exports = pool;