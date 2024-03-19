const express = require('express');
const app = express();

function calculateSum(n){
    let ans = 0;
    for(let i =1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/', (req, res) => {
  const n = req.query.n;
  const ans = calculateSum(n);

  res.send(ans);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


