// snippet 2
let restaurant = {
    name: "Bob's Burgers",
    location: "123 Ocean Avenue",
    owners: ["Bob Belcher", "Linda Belcher"],
    established: 2011,
    menu: ["burgers", "fries", "shakes"],
  };
  
  console.log("owners" in restaurant); // true
  console.log("employees" in restaurant); // false
  
  let someKey = "menu";
  console.log(someKey in restaurant); // true
  
  console.log(restaurant.menu); // ["burgers", "fries", "shakes"]
  console.log(restaurant["menu"]); //["burgers", "fries", "shakes"]
  console.log(restaurant[someKey]); // ["burgers", "fries", "shakes"]
  console.log(restaurant.someKey); // undefined
  
  console.log(restaurant.menu.includes("fries")); // true
  

 

  