let x: number = 1;

console.log(x)

x = 200

console.log(x)


let select: number | null  = 50;

select = null;

console.log(select)

// function greet(): void {
//     console.log("Hello!");
// }

// greet();

function greet(firstName: string){

    console.log(`Hello ${firstName}`)
}

greet("Robert")



function sum(a: number, b: number): number{
    return a + b;
}

console.log(sum(2, 3));


function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));


function delayedCall(fn:()=>void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})



const user = {
	firstName: "Robert",
	lastName: "Welker",
	email: "robert@gmail.com",
	age: 62,
}

interface User {
    firstName:string;
    lastName:string;
    email:string;
    age:number;
}

function isLegalAgain(user1: User){
    if(user1.age > 18){
        return true
    }else {
        return false
    }
}

console.log(isLegalAgain(user))

