// how to run : nodemon server.js
// POST method : able to save data into mongoDB

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
    date: {
        type: String,
        default: Date.now()
    }
})

// 3) define DB model
const blogPost = mongoose.model('blogPost',blogSchema);


app.use(express.json());
app.use(express.urlencoded({extended:false}));


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


// Run service
app.listen(port, () => {
    console.log('Mongo DB started on: ' + port);
});

