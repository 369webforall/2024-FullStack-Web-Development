// snippet 1

let flim = function () {
    console.log("leak");
    flam();
    console.log("geek");
  };
  
  let flam = function () {
    console.log("beak");
    console.log("sneak");
  };
  
  flim();