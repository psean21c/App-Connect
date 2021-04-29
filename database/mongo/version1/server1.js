// how to run : nodemon server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/mern',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongo DB connected')
});

// schema
const schema = mongoose.Schema;
const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
})


// model
const blogPost = mongoose.model('blogPost',blogSchema);

const data = {
    title: "Welcome",
    body: "Help folks.."
};

const newBlogPost = new blogPost(data);
newBlogPost.save((error) => {
    if(error) {
        console.log('error');
    } else {
        console.log('saved')
    }
});


app.get('/api', (req, res) => {
    const data = {
        username: 'simonpark',
        age: 5
    };
    res.json(data);
})

app.listen(port, () => {
    console.log('Mongo DB started on: ' + port);
});

