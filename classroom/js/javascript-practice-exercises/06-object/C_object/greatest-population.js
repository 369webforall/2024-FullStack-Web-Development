// Write a function `greatestPopulation` that accepts an array of country objects as an argument.
// The function should return the name of the country that has the largest population.
// You can assume that the array contains at least one country.

const greatestPopulation = function(arr){
    let country ='';
    let populationCount = 0;
    for(let i = 0; i <arr.length; i++){
        let obj = arr[i]

        if(populationCount < obj.population ){
             populationCount = obj.population;
             country = obj.name   
        }
    }
return country;
}

let countries1 = [
    { name: "Cameroon", population: 27744989, gdp: 38.68 },
    { name: "Belarus", population: 9477918, gdp: 59.66 },
    { name: "Indonesia", population: 267026366, gdp: 1042 },
    { name: "Guyana", population: 750204, gdp: 3.88 },
  ];
  
  console.log(greatestPopulation(countries1)); // 'Indonesia'
  
  let countries2 = [
    { name: "New Zealand", population: 4925477, gdp: 204.9 },
    { name: "Mozambique", population: 30098197, gdp: 14.72 },
    { name: "Greenland", population: 57616, gdp: 2.71 },
    { name: "Kazakhstan", population: 19091949, gdp: 179.3 },
    { name: "Burma", population: 56590071, gdp: 71.21 },
  ];
  
  console.log(greatestPopulation(countries2)); // 'Burma'