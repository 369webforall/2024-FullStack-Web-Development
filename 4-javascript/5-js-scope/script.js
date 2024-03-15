// let global = 100;

// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a); // inner function forms a closure over 'a'
//         console.log(global)
//     }
//     return inner;
// }


// let closureFunc = outer();
// closureFunc(); // Output: 10

function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}

let counter = createCounter();

counter();
counter();
counter();

function parent(child){
let apple = 3
function kids(){
    apple--
    if(apple >0){
        console.log(`${child} have ${apple} apple left`)
    }else {
        console.log(`${child} have no apple left`)
    }
    
}

return kids;
}

let son = parent("Son")
let daughter = parent("Daughter")
son();
son();
daughter()
son()
daughter()
son();



