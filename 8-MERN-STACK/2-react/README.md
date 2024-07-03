# REACT CLASS RECORDING

1. [React-1](https://youtu.be/rnU9KzTxKSg)

## Projects To complete

1. [MERN Stack Tutorial - Book Store Project](https://www.youtube.com/watch?v=-42K44A1oMA)

2. [MERN Finance Tracker App with User Management](https://www.youtube.com/watch?v=4NZx9OF07qY)

## What is React

- Javascript library to build Dynamic and interactive user interfaces.
- Developed at facebook in 2011.
- Most widely used used JS library for frontend development
- Used to create SPA(single page application)

## Working of DOM

- Browser takes HTML and create DOM
- JS helps us modify DOM based on user action or events.
- In big application, working with DOM becomes complicated.

## Problem with Javascript

- React is simple to maintain, it is a component based architecture, which simplifies the development process.

- While plain JavaScript can certainly be used for web development, it often requires more boilerplate code to achieve the same functionality and performance that React provides out of the box. Managing state, rendering updates, and ensuring efficient DOM manipulation can be more challenging and error-prone with plain JavaScript.

## Installation

- Use vite to install React.

- `npm create vite@latest`

[Vite](https://vitejs.dev/)

## Components

A React component is a fundamental building block in React applications. Components are like JavaScript functions, but they return React elements that describe what should appear on the screen. There are two main types of React components: functional components and class components.

1. Functional Components

Functional components are JavaScript functions that return JSX (JavaScript XML).

```js
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

2. Class Components

Class components are ES6 classes that extend from React.Component. They can hold and manage state and lifecycle methods.

```js
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

### Key Concepts of React Components

1. JSX (JavaScript XML)
   JSX is a syntax extension that allows writing HTML-like code within JavaScript. It makes the structure of the component easier to understand and write.

```js
const element = <h1>Hello, world!</h1>;
```

2. Props (Properties)

Props are arguments passed into React components. Props are used to pass data from one component to another, making components reusable.

```js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Alice" />;
```

3. State

State is a built-in object that stores property values that belong to the component. State allows a component to manage its own data and respond to user actions.

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

4. Functional Component with Hooks

React introduced hooks to allow state and other React features to be used in functional components. The most commonly used hooks are useState and useEffect.

```js
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}
```
