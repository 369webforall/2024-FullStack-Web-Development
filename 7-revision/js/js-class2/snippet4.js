// snippet 0-4
let exclaim = function (str) {
    let capitalized = str.toUpperCase(); // POTATO
    return capitalized + "!?"; // POTATO!!
  };
  
  let result = exclaim("potato"); // POTATO!!
  console.log(result);
  console.log(result.length); // 8
  console.log(result[0]); // P
  console.log(result[result.length - 1]); // !