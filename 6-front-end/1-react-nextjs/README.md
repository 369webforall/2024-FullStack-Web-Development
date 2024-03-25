# Class Recording

1. [React-basic](:target="_blank")

# React-Nextjs Topics

## REACTJS

[REACTJS](https://react.dev/ :target="_blank")

### You will learn

- What is JSX ?

JSX (JavaScript XML):
JSX is a syntax extension for JavaScript used with React to describe what the UI should look like. It allows developers to write HTML-like code within JavaScript. JSX makes React code more readable and allows developers to write UI components in a familiar HTML-like format. JSX gets compiled into regular JavaScript objects by a transpiler like Babel before being rendered by the browser.

```js
import React from 'react';

const element = <h1>Hello, world!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

```
In this example, `<h1>Hello, world!</h1>` is JSX syntax representing a heading element.

- What is component and it's type (Functional & Class componets) ?

In React, a component is a reusable piece of UI that can contain HTML, JSX, and logic to render dynamic content. Components are the building blocks of React applications. There are two main types of components in React:

Functional Components: Also known as stateless components, they are defined as JavaScript functions and typically only return JSX.
Class Components: Also known as stateful components, they are defined using ES6 classes and can hold and manage local state.

```js
import React from 'react';

const Welcome = () => {
  return <h1>Hello, Functional Component!</h1>;
};

export default Welcome;

```
Class component example - 

```js
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, Class Component!</h1>;
  }
}

export default Welcome;

```

- What are props and state ?



`Props (Properties)`: Props are short for properties. They are inputs to a component and allow you to pass data from parent components to child components. Props are read-only and cannot be modified within the component itself.

```js
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;

```

State: State is a data structure that holds information about the component's state, which can change over time. Unlike props, state is managed internally within a component and can be updated using the useState method(React hooks). State allows components to manage dynamic content and respond to user interactions.

```js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;

```
1. How to create and nest components
2. How to add markup and styles
3. How to display data
4. How to render conditions and lists
5. How to respond to events and update the screen
6. How to share data between components

Follow the Doccument from react website.




## NEXTJS

[NEXTJS](https://nextjs.org/docs :target="_blank")

1.  Intro to nextjs

`Next.js` is a popular open-source React framework that is used for building server-side rendered (SSR) and statically generated (SSG) web applications. It provides a great developer experience with features like automatic code splitting, routing, and server-side rendering out of the box, allowing developers to focus on building their applications rather than worrying about configuration.

`Server-Side Rendering (SSR)`: Next.js allows you to render React components on the server and send the fully-rendered HTML to the client, improving performance and search engine optimization (SEO). SSR ensures that your web pages are visible to search engines and social media crawlers, enhancing discoverability.

`Static Site Generation (SSG)`: Next.js supports static site generation, where pages can be pre-built at build time, allowing for fast and efficient delivery of content. This is particularly useful for content-heavy websites or applications where the content doesn't change frequently.

`Automatic Code Splitting`: Next.js automatically splits your code into smaller chunks, ensuring that only the necessary JavaScript is loaded when navigating between pages. This helps in reducing the initial load time of your application and improving performance.

`Routing`: Next.js comes with a file-based routing system, where each page of your application corresponds to a file in the pages directory. This makes it easy to create and manage routes without the need for additional configuration.

`API Routes`: Next.js allows you to create API routes within your application, making it easy to handle server-side logic and data fetching. API routes are implemented as serverless functions and can be accessed from the client-side code.

`Built-in CSS and Sass Support`: Next.js provides built-in support for CSS modules, CSS-in-JS libraries like styled-components, and pre-processors like Sass. This allows you to style your components in a modular and maintainable way.

`Authentication`: Next.js offers various authentication strategies and integrates seamlessly with popular authentication providers like Auth0, Firebase, and OAuth providers.

`TypeScript Support`: Next.js has first-class support for TypeScript, allowing you to write type-safe React code and catch errors early in the development process.

2.  Next.js fresh install 

-  in your terminal run below command.

    `npx create-next-app@latest`

3.  Routing & navigation
4.  Metadata
5.  Styling: Tailwind CSS 
6.  Image component
7.  Client vs Server components
8.  Server actions
9.  Suspense and streaming
10. Caching, static & dynamic rendering
11. Middleware
12. Folder structure
13. Static export
14. Push to GitHub
15. Environment variables in Next.js
16. Hosting


