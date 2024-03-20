const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name:String,
age:String,
email:String,
password:String,
})

module.exports = mongoose.model('User', userSchema);