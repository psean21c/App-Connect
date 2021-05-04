// how to run : nodemon server.js

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

const cors = require('cors');
const mongoose = require('mongoose');

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

// if not used, this resource can't be accessed from outside 
// app.use(cors);

// post
app.post('/add', (req, res) => {
    const data = {
        title: req.body.title,
        author: "spark",
        body: req.body.body
    };
    const newBlogPost = new blogPost(data);

    try {
        newBlogPost.save((error) => {
            if (error) {
                res.status(500).json({ msg: 'Sorry, internal server errors' });
                return;
            }
            console.log('your data has been saved');
            return res.json({
                msg: 'Your data has been saved!!!!!!'
            });
        });
    
    } catch(err){
        console.error(err.message);
    }
});

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

// get individual
// app.get('/students/', (req, res) => {
//     try{
//         console.log('main workflow:');
//         blogPost.find()
//             .then((result) => {
//                 console.log(result);
//                 res.send(result);
//             })
//             .catch((err) => console.log(err));
//     } catch(err) {
//         console.log('Internal Error:', error);
//     }
//     //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//     // res.json() 
// });

// Run service
app.listen(port, () => {
    console.log('Mongo DB started on: ' + port);
});

