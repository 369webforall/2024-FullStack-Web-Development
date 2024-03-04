# Object Oriented Programming - OOP

- classes
- constructor function


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

