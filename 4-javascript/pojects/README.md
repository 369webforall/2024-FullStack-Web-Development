# Mini-JS-Projects

# Video Link

[Project-class 1](https://youtu.be/kXHo0BPAjZQ)


1. Color flipper
2. Palindrome Checker
3. Random Quote Generator
4. Stop Watch
5. counter app


# Color flipper
- write a function to change the background color of the page. first you can call the function on button click, pass the color of as argument. second generate the random color on button click.

- index.html, syle.css, script.js
- create a butt

**index.html**

```js

    <button id="green" onclick="setColor('green')">Green</button>
    <button id="red" onclick="setColor('red')">Red</button>
    <button id="blue" onclick="setColor('blue')">Blue</button>
    <button onclick="randomColor()">Random</button>

```

**style.css**

```css

#green {
    background-color: green;
}

#red {
    background-color: red;
}

#blue {
    background-color: blue;
}

button {
    border-radius: 5px;
    width: 100px;
    height: 40px;
    margin: 5px;
}

```

**script.js**

```js
const body = document.body;

function setColor(color){
    body.style.backgroundColor = color;
}

function rand(){
    const rand = Math.floor(Math.random()*16);
    return rand
}

//RGB



function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255) 
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}


// Hexcode
// function randomColor(){
//     console.log(rand())
//     const hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//     let hex = "#"
//     for(let i =0; i < 6; i++){
//         const index = rand();
//     hex += hexValue[index]
//     }
// console.log(hex)
//     body.style.backgroundColor = hex;
// }

```

# Palindrome Checker

- Write a function to check if the input word is palindrome or not; your can display the message in Alert box or append the result in node. (div, p)

```html
<input id="input" type="text" placeholder="Type something" />
    <button onclick="check()">Check</button>
```

```js
const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value 
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("Congrats your word is PALINDROME")
    } else {
        alert("Word is Not a Palindrome")
    }

    input.value = ""
}


```

# Random Quote Generator

- Write a function to generate a random quote when button is clicked and insert the selected qoute in page.Make sure quote is not repeated until all qoute from the array is exhusted. 

```html
<p id="quote"></p>
<button onclick="generateQuote()">Generate Quote</button>

```

```js
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}
```
# Stop Watch

- write a function, which run when button is clicked, start, stop, restart, 

```html
    <h1 id="time">00:00</h1>
    <button onclick="startClock()">Start</button>
    <button onclick="stopClock()">Stop</button>
    <button onclick="resetClock()">Reset</button>
```

- in digital watch we check for every second.
- first let's add the clock board.
- add start , stop and reset function.


```js

let duration = 0;
let interval = null;
const time = document.getElementById("time")

function clockBoard(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
    time.innerHTML = `${clockBoard(minutes)}:${clockBoard(seconds)}` ;
}


```

- when we use setInterval function, then make sure to cleanup the last interval from memory, use clearInterval function and pass the interval value.

```js
function timer() {
    duration++;
    setTime()  
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)

}

function stopClock() {
    clearInterval(interval)
}

```

```js
function resetClock() {
    stopClock()
    duration = 0;
    setTime()
}

```

# 5-Counter App

write 3 function, display, increase and decrease, job of display function is to render the count.

- index.html

```html
    <div class=" wrapper">
        <h1>Counter App</h1>

        <div>
            <h2>Count: <span id="output"></span></h2>

            <div id="btn-wrapper">
                <button id="increase" onclick="increase()">+</button>
                <button id="decrease" onclick="decrease()">-</button>
            </div>
            
        </div>
    </div>
```

style.css

```css
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;

}

.wrapper {
    width: 70%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

#btn-wrapper {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
}
button {
    background-color: purple;
    color: white;
    padding: 12px 24px;
    font-size: 18px;
    border: none;
    cursor: pointer;
}
```

script.js

```js

let count = 0;

const display = () => {
    let span = document.getElementById("output");
    span.innerText = count;
};

function increase(){
    count += 1
    display()
}

function decrease(){
    count -= 1
    display()
}

display();
```

# 6-Calculator app

- In this app we will foucs on UI of the calculator and use eval function to perform the calcualtion.

index.html

```html
   <div class="calculator">
        <input type="text" placeholder="0" id="inputBox" readonly>

        <div>
            <button class="operator ac">AC</button>
            <button class="operator del">DEL</button>
            <button class="operator">%</button>
            <button class="operator">/</button>
        </div>
         <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="operator">*</button>
        </div>
        <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class="operator">-</button>
        </div>
        <div>
            <button>3</button>
            <button>2</button>
            <button>1</button>
            <button class="operator">+</button>
        </div>
        <div>
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button class="operator">=</button>
        </div>
    </div>
```

style.css
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
}

.calculator {
    padding: 20px;
    border:2px solid #000;
    border-radius: 16px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.8);
    background-color: #000;
}

input {
    width: 320px;
    padding: 24px;
    margin: 10px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: inset 0px 0px 8px rgba(0,0,0,0.5);
    font-size: 65px;
    text-align: right;
    color: #fff;
    border: solid 2px rgba(0,0,0,0.3);
    border-radius: 16px;
    text-shadow: 0px 1px 5px rgba(0,0,0,0.2);
}

input::placeholder{
    color:#fff;
}

button {
    width: 60px;
    height: 60px;
    margin: 10px;
    color: #fff;
    background-color: rgba(0,0,0,0.7);
    font-size: 24px;
    cursor: pointer;
    border:1px solid rgba(255,25,255,0.2);
    border-radius: 25px;
    text-shadow: 0px 1px 5px rgba(0,0,0,0.2);
}

.ac, .del {
    font-size: 20px;
}

button:hover{
    color:#fff;
    background: #f67c14;
}

.equalBtn {
    background:#f67c14;
}

.operator {
    color: #f67c14;
}
```


script.js

```js
const display = document.getElementById("inputBox");
let button = document.querySelectorAll("button");
let buttonArray = Array.from(button)

let string = ""

buttonArray.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        if(event.target.innerHTML === "DEL"){
            string = string.substring(0, string.length - 1)
            display.value = string
        }else if(event.target.innerHTML === "AC"){
            string =""
            display.value = string
        } else if(event.target.innerHTML === '='){
            string = eval(string)
            display.value = string
        }
        
        
        else {
            string += event.target.innerHTML;
            display.value = string
            
        }
        

    })
})

```