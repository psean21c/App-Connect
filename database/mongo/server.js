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
const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    staff: String,
})


// 3) DB model
const studentModel = mongoose.model('student',studentSchema);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/students', (req, res) => {
    try{
        console.log('main workflow:');
        studentModel.find()
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

app.post('/add', (req, res) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        staff: req.body.staff
    };
    const newStudent = new studentModel(data);

    try {
        newStudent.save((error) => {
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

