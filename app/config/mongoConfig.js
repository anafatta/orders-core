const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/admin";
mongoose.connect(uri);

var connection = mongoose.connection;

connection.on('connected', function(){
    console.log("MongoDB connected..")
});
connection.on('disconnected', function(){
    console.log("MongoDB disconnected..")
});
connection.on('error', function(){
    console.log("MongoDB connection error..")
});
process.on('SIGINT', function(){
    connection.close(function(){
        console.log("MongoDB clossing connection ..")
    });
   
});
module.exports = connection; 