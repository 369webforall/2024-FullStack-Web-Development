const express = require('express');
const app = express();

function calcualteSum(n){
    let ans =0;
    for(let i =1; i <= n; i++){
        ans = ans + i
    }

    return ans;

}

const result = calcualteSum(20)
console.log(result)



app.get('/doctor', (req, res)=>{
    let n = req.query.n;
    const ans = calcualteSum(n)
  
    res.status(200).send(ans.toString());
})

app.listen(3000, ()=>{
    console.log("server is running in port 3000")
})

