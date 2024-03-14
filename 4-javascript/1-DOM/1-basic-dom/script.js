// creating element
// adding the text
// appening the element node


let demo = document.getElementById("demo")

console.log(demo)


let h1 = document.createElement('h1')

console.log(h1)

h1.textContent = "This is heading one"

demo.append(h1)