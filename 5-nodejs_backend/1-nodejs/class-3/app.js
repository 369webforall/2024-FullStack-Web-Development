const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRouters');

// X2lHdzqliPqoJ8g4
// mongodb+srv://admin:X2lHdzqliPqoJ8g4@cluster0.nd2bby9.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://admin:X2lHdzqliPqoJ8g4@cluster0.nd2bby9.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();



app.use(express.json())


app.use('/users', userRoutes); // localhost:3000/users



app.listen(3000, ()=>{
    console.log("Server is running in port 3000")
})