add()
console.log(ab)
function add(){
    console.log("global")
}

const subtract = function(){
    console.log("subtract")
}

subtract();
var ab = 100;

let y = 200;

const z = 300;

console.log(z)



function square(a, b){
    let x = 20;
    var z =30;
    const c = 10;
    return a+b+x+z+c;
}

let result = square(2, 3);

console.log(result);