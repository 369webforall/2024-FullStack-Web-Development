// snippet 0-2
let howMany = function () {
    return 42;
  };
  
  console.log(howMany);
  console.log(howMany()); // 42
  
  const theAnswer = howMany();
  console.log(theAnswer); // 42
  
  let howMuch = function () {
   5;
  };
  console.log(howMuch()); // undefined