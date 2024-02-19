// snippet 3

let foo = function () {
    for (let i = 0; i < 5; i++) {
      console.log("i = " + i);
      bar();
      
    }
  };
  
  let bar = function () {
    for (let j = 0; j < 5; j++) {
      console.log("  j = " + j);
    }
  };
  
  foo();