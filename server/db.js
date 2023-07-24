const mongoose = require("mongoose");
path = require("path")
const dotenv = require('dotenv')
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI

const connection = mongoose.connect(MONGODB_URI)

module.exports ={
    connection
};


