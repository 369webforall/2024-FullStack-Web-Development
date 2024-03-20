const express = require('express');


const app = express();

app.use(express.json())
app.use(loggedIn);

app.get('/',loggedIn, (req, res)=>{
res.send("This is root route, you are looged in")
})

function loggedIn(req, res, next){
const user = req.query.user;
if(user==='dev'){
    console.log('logged in')
    next();
    return;
}else {
    res.send("Not allowed to login")
}
}

app.get('/users', (req, res)=>{
    res.send("This is user route")
});

app.listen(3000, ()=>{
    console.log("Server is running in port 3000")
})