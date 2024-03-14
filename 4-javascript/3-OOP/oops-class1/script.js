function Person(firstName, lastName) {
    
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new Person('John','Doe');
let person2 = new Person('Robert','Welker');

console.log()


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }

// let person = new Person("John", "Doe");
// console.log(person.getFullName());


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

let person = new Person("John", "Doe");
console.log(person.getFullName());

let person3 = new Person("Dev", "Mahato")

console.log(person3.getFullName())