// array
//  map - map is higher order function.

//every thing in javascript  kind of object.
// map return array back.

// Array.map(function(data){

// })

let radius = [2, 3, 4, 5, 8, 6, 9];


let result = radius.map(function(num){
return num + 1
})


console.log(result)

//filter - return array, for every true condition

let filteredData = radius.filter(function(n){
if(n % 2 === 0){
    return true
}
})

console.log(filteredData)

// reduce = 

let sum = radius.reduce(function(acc, val){
    acc += val
    return acc;
}, 0)

console.log(sum)