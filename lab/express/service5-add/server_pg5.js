// How to run
// 1)
// $ nodemon server_pg5.js
// 2)
// $ curl -X GET --url "http://localhost:3030/add"

const express = require('express');
const  app = express();
const  port = process.env.PORT || 3030;

const pool = require("./db5") // DB connection

app.use(express.json()) // request.body

// POST
app.post("/add", async(req,res) =>{
  try{
    console.log("request body:" + req.body);
    const firstname = "Cindy";
    const lastname = "Kwon";
    const country = "Korea";
    const stmt = "INSERT INTO students(firstname,lastname, country) VALUES($1,$2,$3)";
    const newTodo = await pool.query(stmt,[firstname,lastname,country]);
    // res.json(newTodo);
    res.json(newTodo.rows[0]);

  }catch(err){
    console.error(err.message);
  }
})

app.listen(port, () => {
    console.log('RESTful API server started on: ' + port);
});

