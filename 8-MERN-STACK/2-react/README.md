# REACT CLASS RECORDING

1. [React-1](https://youtu.be/rnU9KzTxKSg)

2. [React-Router-Dom](https://youtu.be/4ccfxrxsaSM)

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

### REACT ROUTER DOM

React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.

- Installation

`npm install react-router-dom`

```js
//main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

```js
// router.tsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
```

```js
//App.tsx

import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <footer>This is Footer section</footer>
    </div>
  );
};

export default App;
```

## React Hooks (What is hooks?)

- Hooks are `functions` to use some `react features` in functional components.
- Hooks are functions that makes Functional components work like Class components.
- Before react lunch hooks, there was only way to use state and life cycle methods by using the class components.

### State Management

1. useState,
2. useReducer,

**useState Hooks**

- useState: This hook lets you add state to functional components.most common and most used hooks, its like bread and butter of the react functional components

- it return array, with two value, first one is state which holds the data and second value is fucntion used for updating the state value.

`What is state ?`

- State are nothing but just value and variable of your component.

Example 1. lets create a coundter app, mostly used when working with shopping cart.

```js
import React, { useState } from "react";

function Counter() {
  // Declare a state variable named 'count', initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Add or Remove Cart Item: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me + </button>
      <button onClick={() => setCount(count - 1)}>Click me -</button>
    </div>
  );
}

export default Counter;
```

example 2 :

- let useState to capture the value of input field

```js
import React, { useState } from "react";

function InputCapture() {
  // Declare a state variable named 'inputValue', initialized to an empty string
  const [inputValue, setInputValue] = useState("");

  // Handle change event for the input field
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default InputCapture;
```

example 3: useState for Toggle Visibility

```js
import React, { useState } from "react";

function ToggleButton() {
  // Declare a state variable named 'isOn', initialized to false
  const [isOn, setIsOn] = useState(false);

  // Handle the button click event to toggle the state
  const toggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
      <p>
        The button is {isOn ? "When true display ON" : "When false display OFF"}
      </p>
    </div>
  );
}

export default ToggleButton;
```

Example 4: We can also use useState to apply classes and style conditionally.

```js
import React, { useState } from "react";
import "./ToggleStyle.css"; // Assuming you have some CSS classes defined in this file

function ToggleStyle() {
  // Declare a state variable named 'isToggled', initialized to false
  const [isToggled, setIsToggled] = useState(false);

  // Handle the button click event to toggle the state
  const toggle = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className={isToggled ? "toggled-on" : "toggled-off"}
        style={{
          backgroundColor: isToggled ? "green" : "red",
          color: isToggled ? "white" : "black",
        }}
      >
        {isToggled ? "ON" : "OFF"}
      </button>
      <p className={isToggled ? "text-on" : "text-off"}>
        The button is {isToggled ? "ON" : "OFF"}
      </p>
    </div>
  );
}

export default ToggleStyle;

//css


.toggled-on {
  border: 2px solid green;
}

.toggled-off {
  border: 2px solid red;
}

.text-on {
  font-weight: bold;
  color: green;
}

.text-off {
  font-weight: normal;
  color: red;
}

```

Example: 5 - How to work with object value in useState.

```js
const UserProfile = () => {
  // Initialize state with an object
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  });

  // Function to update the user's name
  const updateName = (newName) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: newName,
    }));
  };

  // Function to update the user's age
  const updateAge = (newAge) => {
    setUser((prevUser) => ({
      ...prevUser,
      age: newAge,
    }));
  };

  // Function to update the user's email
  const updateEmail = (newEmail) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <button onClick={() => updateName("Jane Smith")}>Change Name</button>
      <button onClick={() => updateAge(35)}>Change Age</button>
      <button onClick={() => updateEmail("jane.smith@example.com")}>
        Change Email
      </button>
    </div>
  );
};

export default UserProfile;
```

### Effect Hooks

1. useEffect

- UseEffect is used to perform side effects in our components.

What is side Effect ?

- Side effects are actions which are performed with the Outside world.
- We perform a side effect when we need to reach outside of our React components to do somethings.
- Fetching data from API, updating the DOM element and window and Time function like settimeout, setInterval
- useEffect accepts two arguments, first is callback function where we write our side effect logic, and second is array of argumnets, which is optinal.

```js
useEffect(callback, dependencies);
```

**Variation of useEffect**

UseEffect without any dependencies - it runs with first
render and also run on any thing changes in that
component. 2. UseEffect with an empty array - it runs only on first
render. Useful for Fetching data. 3. UseEffect with variables - it runs on first render and then
any variable that we pass in dependency change it will
run.

```js
useEffect(() => {
  document.title = `${count} new message!`;
});
```

- Not use Effect will run every time we click the button.

**Clean-up Function in useEffect**

```js
import React, { useEffect, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Run useEffect", count);
    return () => {
      // clean-up function
      console.log("Clean up", count);
    };
  }, [count]);
  return (
    <>
      <h3>Count {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};
export default App;
```

If we are setting state using setInterval and that side effect
is not cleaned up, when our component unmounts or we're no
longer using it, the state is destroyed with the component

– but the setInterval function will keep running. and that’s
make our application slow and low in performance.
To use clean-up function we need to run return function in
useEffect. Timeouts, subscriptions, event listeners, and
other effects that are no longer needed should be disposed
with the help of cleanup function.

### Context Hooks

1. useContext

### Ref Hooks

1. useRef

### Performance Hooks

1. useMemo
2. useCallback

### Custom Hooks
