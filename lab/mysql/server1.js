// How to run: $node server1.js
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// Root, or you will get this message
// Cannot GET /
app.get("/",(req,res) => {
    console.log("Responding to root route")
    res.send("Hello from ROOOOT")
})

// Plain REST GET
app.get("/users", (req,res) =>{
    var user1 = {firstName:"Simon", lastName: "Park"}
    const user2 = {firstName:"David", lastName: "Lee"}
    res.json([user1,user2])
})

app.listen(port, () => {
    console.log('todo list RESTful API server started on: ' + port);
});

