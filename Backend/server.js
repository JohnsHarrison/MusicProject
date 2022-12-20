if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config()
}

const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use(logger('dev'));
app.use('/api', routes)






let MONGODB_URL = process.env.MONGODB_PROD || process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/musicDatabase"

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

mongoose.set('debug', true)
const db = mongoose.connection 

db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to Mongoose"))


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})