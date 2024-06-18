//  DOM = DOCUMENT OBJECT MODEL
// Object {} that represents the page you see in the web browser
// and provide you with API to interact  with it.
// web browser constructs the DOM when it loads the HTML documents,
// and structures all the elements in a tree-like representation.
// Javascrit can access the DOM to dynamically change the content, structure, and style of a web page.
const body  = document.body;

// append , appendChild

body.append('hello world')

console.log(document)

// create element and append to the body

const div = document.createElement('div')
// body.append(div)

// Add text to the div (innerText or textContent)

div.innerText = "hellow world 2"

body.append(div)


// insert html inside div (innerHTML)

//getAttribute or setAttribute

