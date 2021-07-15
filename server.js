const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(PORT);
    console.log('DB connected \nServer is ready to listen');
})
.catch((err) => {
    console.log(err);
});

app.use('/api', authRouter);

if(process.env.NODE_ENV =="production"){
    app.use(express.static('client/build'));
}