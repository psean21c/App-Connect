// how to run : nodemon server2.js

const mongoose = require('mongoose');
// const cors = require('cors');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

// 1) DB connect
mongoose.connect('mongodb://localhost/cis',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongo DB connected')
});

// 2) DB schema
const schema = mongoose.Schema;
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
})


// 3) define DB model
const blogPost = mongoose.model('blogPost',blogSchema);


// if not used, this resource can't be accessed from outside 
// app.use(cors);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/add", async(req,res) =>{
    try{
      console.log("request body:" + req.body.title);
      res.json("{data: 1}"); // sending {data:1}
    //   res.send('{data:good}');
  
    }catch(err){
      console.error(err.message);
    }
  });
  
// dummy get()
app.get('/', (req, res) => {
    console.log('listening from : ', req.body)
    res.send('Hello World-2!\n')
});

// Run service
app.listen(port, () => {
    console.log('Mongo DB started on: ' + port);
});

