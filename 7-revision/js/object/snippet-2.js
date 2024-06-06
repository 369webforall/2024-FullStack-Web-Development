// snippet 2
let restaurant = {
    name: "Bob's Burgers",
    location: "123 Ocean Avenue",
    owners: ["Bob Belcher", "Linda Belcher"],
    established: 2011,
    menu: ["burgers", "fries", "shakes"],
  };
  
  console.log("owners" in restaurant);
  console.log("employees" in restaurant);
  
  let someKey = "menu";
  console.log(someKey in restaurant);
  
  console.log(restaurant.menu);
  console.log(restaurant["menu"]);
  console.log(restaurant[someKey]);
  console.log(restaurant.someKey); // undefined
  console.log(restaurant.menu.includes("fries")); // true
  