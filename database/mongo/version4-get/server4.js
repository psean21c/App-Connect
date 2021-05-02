// how to run : nodemon server.js
// Node.js (Mongo DB) Tutorial # 9 / 10
// https://www.youtube.com/watch?v=bxsemcrY4gQ
// https://www.youtube.com/watch?v=VVGgacjzc2Y

const mongoose = require('mongoose');

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
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
})

// 3) DB model
const blogPost = mongoose.model('blogPost',blogSchema);


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/students', (req, res) => {
    try{
        console.log('main workflow:');
        blogPost.find()
            .then((result) => {
                console.log(result);
                res.send(result);
            })
            .catch((err) => console.log(err));
    } catch(err) {
        console.log('Internal Error:', error);
    }
    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // res.json() 
});

// Run service
app.listen(port, () => {
    console.log('Mongo DB started on: ' + port);
});

