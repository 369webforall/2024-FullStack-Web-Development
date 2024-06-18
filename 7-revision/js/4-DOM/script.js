//  DOM = DOCUMENT OBJECT MODEL
// Object {} that represents the page you see in the web browser
// and provide you with API to interact  with it.
// web browser constructs the DOM when it loads the HTML documents,
// and structures all the elements in a tree-like representation.
// Javascrit can access the DOM to dynamically change the content, structure, and style of a web page.

{body:''}


const body  = document.body;
console.log(body)

// append , appendChild - add node to any element

body.append('hello world from append')



//console.log(document)

// create element and append to the body

const box1 = document.createElement('div')

const h1 = document.createElement('h1')


h1.textContent = 'This is the h1 from createelement'

box1.append(h1)

let h2 = document.createElement('h2');
h2.innerText = "this is h2 for box 1"

box1.append(h2)

body.appendChild(box1)

let box2 = document.querySelector('.box2')

box2.innerHTML = `
<p>hello this is p tag in box2</p>
<h3>This is heading 3</h3>
`
box2.id = 'setid'
// box2.setAttribute('id', 'setAtt')

console.log(box2)
// console.log(box2.getAttribute('id'))
// Add text to the div (innerText or textContent)

//div.innerText = "hellow world 2"

//body.append(div)


// insert html inside div (innerHTML)

//getAttribute or setAttribute

