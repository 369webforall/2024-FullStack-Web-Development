const express = require("express");
const userRoutes = require('./routes/userRoutes')

const app = express();


app.use(express.json())

app.use('/users', userRoutes);

// app.get('/', (req, res)=>{
//     console.log("get route")
// res.send("Hellow your are in get route")
// })

// app.get('/users', (req, res)=>{
//     const name = req.query.name
//     console.log("get route")
// res.send(`This is all the user route ${name}`)
// })

// app.get('/users/:id', (req, res)=>{
//    const id = req.params.id
// res.send(`This is single user id:, ${id}`)
// })

// app.post('/users',  (req, res) => {
//     const userData =  req.body;
//     console.log(userData);
//     // Use userData to perform operations
// });

// app.patch('/users',  (req, res) => {
//     const userData =  req.body;
//     console.log(userData);
//     // Use userData to perform operations
// });

app.listen(8000, ()=>{
    console.log("server is running in port 8000");
})