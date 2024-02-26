// how to create element
console.log(document.body)

let div = document.createElement('div');

console.log(div)

div.textContent = "This is div"

document.body.append(div)

console.log(div)




let h2 = document.createElement("h2")

h2.innerText = "This is h2"

console.log(h2)

document.body.appendChild(h2)

document.body.innerHTML = '<p>This is a paragraph</p>'

