# REACT CLASS RECORDING

1. [React-1](https://youtu.be/rnU9KzTxKSg)

2. [React-Router-Dom](https://youtu.be/4ccfxrxsaSM)

3. [React-Router-Dom](https://youtu.be/6yGnO3-BrSQ)

4. [Hosting MERN APP](https://youtu.be/Wmjz4sVnAvY)

5. [React Hooks - useContext](https://youtu.be/Rtoddpm6ik4)

6. [React Hooks - useContext/useReducer](https://youtu.be/1_QlNz6KK5o)

7. [Recoil State Management](https://youtu.be/s3YRgir_hVk)

## React Hooks & Recoil video

1. [ALL React Hooks Explained in 12 Minutes](https://www.youtube.com/watch?v=LOH1l-MP_9k)

2. [React Hooks - 1 hour video](https://www.youtube.com/watch?v=HnXPKtro4SM)

3. [Recoil- state management library](https://www.youtube.com/watch?v=wHe6-2-ZX6Y)

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

The useContext hook in React is a way to access context values in functional components. It provides a way to share values between components without having to pass props down manually at every level of the component tree.

Here's a step-by-step explanation and example of how to use the useContext hook:

- Create a Context: First, you need to create a context using the createContext function.
- Provide the Context: Use the Provider component of the context to wrap the part of your component tree that needs access to the context values.
- Consume the Context: Use the useContext hook in any functional component that needs to access the context values.

### First Example

Step 1: Create a Context

```js
import React, { createContext, useState } from "react";

// Create a context with a default value
const CounterContext = createContext();

// Step 2: Provide the Context

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
```

Step 3: Consume the Context

Create a component that consumes the context to display the current count and buttons to increment and decrement the count.

```js
import React, { useContext } from "react";
import CounterContext from "./CounterContext"; // Make sure to import the context

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

Step 4: Use the Provider in Your App

```js
import React from "react";
import ReactDOM from "react-dom";
import CounterProvider from "./CounterProvider";
import Counter from "./Counter";

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### second example

Step 1: Create a Context

```js
import React, { createContext, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext("light");

// Step 2: Provide the Context

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

Step 3: Consume the Context

Now, let's create a component that consumes the context and displays the current theme. We'll also add a button to toggle the theme.

```js
import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

Step 4: Use the Provider in Your App

```js
import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### useReducer Hooks

The useReducer hook is another way to manage state in React, often preferred for more complex state logic than useState. It is similar to how you would use a reducer in a Redux store. You define a reducer function that determines how the state should change in response to actions, and then use the useReducer hook to access the state and dispatch actions.

**simple counter app example**

Step 1: Define the Reducer Function

Step 2: Use the useReducer Hook in a Component

```js
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
```

Step 3: Use the Component in Your App

```js
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### More complex example for useReducer hooks - Shopping cart

Step 1: Define the Initial State and Reducer Function

```js
import React, { useReducer } from "react";

// Define a list of products for demonstration purposes
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

// Initial state of the cart
const initialState = {
  cart: [],
  total: 0,
};

// Reducer function to handle actions
function cartReducer(state, action) {
  switch (action.type) {
    case "add_item":
      const updatedCart = [...state.cart, action.payload];
      const updatedTotal = updatedCart.reduce(
        (sum, item) => sum + item.price,
        0
      );
      return { ...state, cart: updatedCart, total: updatedTotal };

    case "remove_item":
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      const newTotal = filteredCart.reduce((sum, item) => sum + item.price, 0);
      return { ...state, cart: filteredCart, total: newTotal };

    case "clear_cart":
      return { ...state, cart: [], total: 0 };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

onst ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: 'add_item', payload: item });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: 'remove_item', payload: item });
  };

  const clearCart = () => {
    dispatch({ type: 'clear_cart' });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        {products.map(product => (
          <div key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {state.cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          state.cart.map(item => (
            <div key={item.id}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </div>
          ))
        )}
      </div>

      <div>
        <h2>Total: ${state.total}</h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default ShoppingCart;



```

Step 3: Use the ShoppingCart Component in Your App

```js
import React from "react";
import ReactDOM from "react-dom";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  return (
    <div>
      <ShoppingCart />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## State Management using Recoil

`What is state management`

State management is a crucial concept in web development that deals with the way an application handles data that can change over time. In simpler terms, it’s about how an application keeps track of different pieces of data (state) and ensures that any changes in the state are properly reflected throughout the application.

In a web application, state can include things like user input, data fetched from a server, the current view or page, UI elements' visibility, and much more. Proper state management ensures that the application is consistent, reliable, and responsive to user interactions.

**Common State Management Libraries**

There are several state management libraries commonly used in web development, including:

- Redux: A predictable state container for JavaScript apps.
- MobX: A simple, scalable state management solution.
- Context API (React): Built-in state management solution in React.
- Recoil: A state management library for React, which we'll explain in detail below.

### Recoil

Recoil is a relatively new state management library for React applications. It aims to provide a simpler and more efficient way to manage state in large and complex React applications. Here are some of the key concepts and features of Recoil:

- Context Api has unnecessary re-renders, Where recoil get rid of this problem.

`Key Concepts`

1. Atoms:

- Has concept of an atoms to store the state.
- Atoms can be defined out side of the component.
- can be teleported to any component.

- Atoms are units of state in Recoil. They can be read from and written to from any component. An atom represents a piece of state that can be shared across different components.

- When an atom's value changes, any component that subscribes to that atom will re-render with the new value.

2. Selectors:

- Selectors are derived state. They allow you to compute derived state based on the value of one or more atoms or other selectors. Think of them as a way to create dynamic data that depends on other state.

- Selectors can also have asynchronous logic, making it easy to fetch data from an API and store it in the state.

**Features of Recoil**

1. Simplicity:

- Recoil is designed to be simple and easy to use. It integrates seamlessly with React's function components and hooks.

2. Performance:

- Recoil optimizes re-renders by ensuring that only components that depend on changed atoms or selectors are re-rendered

3. Scalability:

- Recoil scales well with large applications by providing tools to manage complex state dependencies and interactions.

`npm install recoil`

### Things to learn

- RecoilRoot: Sets up the Recoil context for the app.
- Atoms: Units of state, can be read and written from any component.
- useRecoilState: Hook to read and write an atom's value, similar to useState.
- useRecoilValue: Hook to read an atom's value without subscribing to changes.
- useSetRecoilState: Hook to set an atom's value without reading it.
- Selectors: Functions that derive state from atoms or other selectors, can be synchronous or asynchronous.

- Selectors are functions that derive state from atoms or other selectors. They can compute new values based on existing state.
- Selectors can also be asynchronous, allowing you to fetch data from APIs and transform it before storing it in the state.

```js
// selector example

import { selector } from "recoil";
import { countState } from "./atoms";

const doubledCountState = selector({
  key: "doubledCountState", // unique ID
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});
```

```js
// use case

import React from "react";
import { useRecoilValue } from "recoil";
import { doubledCountState } from "./selectors";

function DoubledCount() {
  const doubledCount = useRecoilValue(doubledCountState);

  return <p>Doubled Count: {doubledCount}</p>;
}

export default DoubledCount;
```

### Example 1 - counter

```js
//store/atoms/count.jsx

import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  get: (props) => {
    const count = props.get(countAtom);
    return count % 2;
  },
});
```

```js
//pages/RecoilCounter.jsx

import React, { useState } from "react";
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

const RecoilCouter = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

export default RecoilCouter;

function Count() {
  return (
    <>
      <CountRender />
      <EvenCountRender />
      <Button />
    </>
  );
}

function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      <p>{isEven ? "Is even value" : null}</p>
    </>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <p>
        {" "}
        CountRender: <b>{count}</b>
      </p>
    </div>
  );
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
```

### Example 2 shopping cart using fake store api and recoil for state management.

Step 1: Set Up Your Project

- install reactjs, setup tailwind css (https://vitejs.dev/guide/)
- `npm install`

- Tailwind css - (https://tailwindcss.com/)

- clean the App component
- `npm run dev`

  **Install necessary packages:**

- `npm install react-router-dom`

- Build Navbar (Products Cart)

Step 2: Set Up Recoil and React Query

1. Create Recoil atoms for state management:

```js
// npm install recoil
//src/store/atoms/cartAtom.jsx:

import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});
```

2. Set up React Query:

```js
// src/index.jsx:
// npm i @tanstack/react-query

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Step 3: Create Product and Cart Components

1. Fetch products using React Query:

```js
// src/hooks/useProducts.jsx:
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};

export const useProducts = () => {
  return useQuery({
    queryKey: "products",
    queryFn: fetchProducts,
  });
};
```

2. Create Product component:

```js
// src/components/Product.jsx:

import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../store/atoms/cartAtom";

const Product = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="mb-4">{product.price} USD</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
```

3. Create ProductList component:

```js
// src/components/ProductList.js:

import React from "react";
import { useProducts } from "../hooks/useProducts";
import Product from "./Product";

const ProductList = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
```

4. Create Cart component:

```js
// src/components/Cart.js:

import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartAtom";

const Cart = () => {
  const cart = useRecoilValue(cartState);

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-2">
              {item.title} - {item.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
```

Step 4: Assemble the App

1. Create the main App component:

```js
// src/App.js:

import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recoil Shop</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <ProductList />
        </div>
        <div className="w-full md:w-1/3">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
```

### Part 2: Shopping Part (improve shopping cart, update, delete item, total amount, Payment)

### Ref Hooks

1. useRef

### Performance Hooks

1. useMemo
2. useCallback

### Custom Hooks
