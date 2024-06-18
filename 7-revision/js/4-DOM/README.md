

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Welcome to the Sample Page</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://www.example.com">Click here</a>
</body>
</html>


```

Document
└── html
    ├── head
    │   └── title
    │       └── "Sample Page"
    └── body
        ├── h1
        │   └── "Welcome to the Sample Page"
        ├── p
        │   └── "This is a paragraph of text."
        └── a
            ├── href="https://www.example.com"
            └── "Click here"

**Detailed Breakdown**

- Document Node

The root node representing the entire HTML document.

- <html> Element

Child of the Document node.

- <head> Element

    - Child of the <html> node.

    - Contains the <title> element.

- <title> Element

    - Child of the <head> node.`
    - Contains a text node: "Sample Page".

- <body> Element

    - Child of the <html> node.
    - Contains the <h1>, <p>, and <a> elements.

- <h1> Element

    - Child of the <body> node.
    - Contains a text node: "Welcome to the Sample Page".

- <p> Element

    - Child of the <body> node.
    - Contains a text node: "This is a paragraph of text."

- <a> Element

    - Child of the <body> node.
    - Has an attribute href with the value "https://www.example.com".
    - Contains a text node: "Click here".


    ## 

    ```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Handling Example</title>
</head>
<body>
    <form>
        <input type="text" name="exampleInput" placeholder="Type something...">
        <button type="submit">Submit</button>
    </form>

    <script>
// Document Event
// The DOMContentLoaded event triggers when the HTML document has been completely loaded and parsed.

        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('Document fully loaded and parsed');
        });

      

        const form = document.querySelector('form');
        const input = document.querySelector('input');
        const button = document.querySelector('button');

          // Form Event
        // Forms can trigger various events like submit and reset.

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Form submitted');
        });

        // Keyboard Events
        // Keyboard events include keydown, keyup, and keypress.

        document.addEventListener('keydown', (event) => {
            console.log(`Key down: ${event.key}`);
        });

        document.addEventListener('keyup', (event) => {
            console.log(`Key up: ${event.key}`);
        });

        document.addEventListener('keypress', (event) => {
            console.log(`Key press: ${event.key}`);
        });

        // Mouse Events
        // Mouse events include click, mouseover, and mouseout.

        button.addEventListener('click', (event) => {
            console.log('Button clicked');
        });

        button.addEventListener('mouseover', (event) => {
            console.log('Mouse over button');
        });

        button.addEventListener('mouseout', (event) => {
            console.log('Mouse out of button');
        });

    // onload Event
    // The load event is triggered when the whole page (including all dependent resources like images) has loaded.

        window.addEventListener('load', (event) => {
            console.log('Page fully loaded');
        });

        // onfocus and onblur Events
        // These events are triggered when an element gains or loses focus.

        input.addEventListener('focus', (event) => {
            console.log('Input focused');
        });

        input.addEventListener('blur', (event) => {
            console.log('Input lost focus');
        });

        // onchange Event
        // This event is triggered when the value of an input element is changed and the element loses focus.

        input.addEventListener('change', (event) => {
            console.log('Input value changed');
        });
    </script>
</body>
</html>


    ```