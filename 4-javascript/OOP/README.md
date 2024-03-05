# Object Oriented Programming - OOP

- this keyword
- constructor function
- classes
- factory fucntion
- IIFE - immediately invoked function expression

**this**

- This in global scope

`console.log(this)` // this keyword in global space represent global object i.e window

- this inside a function

```js
function x(){
    console.log(this) // this keyword refer to global object. (this substitution)
}

x()
```

- this in strict mode

```js
"use strict"

function x(){
    console.log(this) // this keyword refer undefined or null.
}

x(); // undefiend

window.x() // window object.

```
`The value of this also depends on how the function is called.`

- this inside object method

```js
const obj = {
    a:10;
    x: function(){
        console.log(this)
    }
}

obj.x() // value of this keyword is the object. {a:10, x:fn}

```

- this inside call method (still need to learn call, apply and bind method seperately)

```js
const student = {
    name:"John"
    printName:function(){
        console.log(this.name)
    }
}

console.log(student.printName())

const student2 = {
    name: "Robert welker"
}
console.log(student.printName.call(student2));
```

**JavaScript constructor functions**

`below code creates a new person object with two properties firstName and lastName:`

- In practice, you often need to create many similar objects like the person object.

- To do that, you can use a constructor function to define a custom type and the new operator to create multiple objects from this type.

- The name of a constructor function starts with a capital letter like Person, Document, etc.

- A constructor function should be called only with the new operator.

```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// contructor function

    function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person1 = new Person('John','Doe');
let person2 = new Person('Robert','Welker');

console.log(person1)

```


**Classes:**

- Classes in JavaScript provide a structured and organized approach to defining objects and their behavior, making 
   code more readable and maintainable. They're an essential part of modern JavaScript programming.


```js

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

```

- above code is functionally equivalent to the following:

```js
function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}



```
**Adding methods to JavaScript constructor functions**

```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = new Person("John", "Doe");
console.log(person.getFullName());

```

`The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.`

```js

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };


    
let person = new Person("John", "Doe");
console.log(person.getFullName());

```

1. Class Declaration:

Classes are declared using the class keyword followed by the class name.
Inside the class, you can define a constructor method using the constructor() keyword, which is called when an instance of the class is created.
```js
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
```

2. Properties:
Properties are defined using this within the constructor or directly within the class body.

```js
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

```
3. Methods:
Methods are functions defined within the class.

```js
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

```

4. Instantiation:
Objects (instances) are created using the new keyword followed by the class name and any required arguments for the constructor.

```js
const rect = new Rectangle(5, 10);

```

5. Inheritance:
Classes can inherit properties and methods from other classes using the extends keyword.

```js
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Calls the parent class constructor
    }
}

```

6. Super Keyword:
super keyword is used to call methods on the parent class within the child class constructor or methods.

```js
class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Calls the parent class constructor
    }
}

```

7. Static Methods:
Static methods are called on the class itself, rather than on instances of the class.

```js
class MathHelper {
    static add(x, y) {
        return x + y;
    }
}

```

8. Getters and Setters:
Getters and setters allow controlling access to class properties.

```js
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(value) {
        this.radius = value / 2;
    }
}

```

**factory functions in JavaScript**

`A factory function is a function that returns a new object. The following creates a person object named person1:`

```js
let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person1.getFullName());


let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person2.getFullName());


// In this example, the person1 and person2 objects have the same properties and methods.

```

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());

```

- By using the factory function, you create any number of the person objects without duplicating code.

- When you create an object, the JavaScript engine allocates memory to it. If you create many person objects, the JavaScript    engine needs lots of memory space to store these objects.

- However, each person object has a copy of the same getFullName() method. It’s not efficient memory management.

- To avoid duplicating the same getFullName() function in every object, you can remove the getFullName() method from the person object:

```js
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

person1.getFullName = personActions.getFullName;
person2.getFullName = personActions.getFullName;

console.log(person1.getFullName());
console.log(person2.getFullName());

```

**The Object.create() method**

`The Object.create() method creates a new object using an existing object as the prototype of the new object:`

```js
var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

function createPerson(firstName, lastName) {
  let person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}


let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');

console.log(person1.getFullName());
console.log(person2.getFullName());

```
