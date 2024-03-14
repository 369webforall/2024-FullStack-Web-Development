// Event loop

// synchronouse code

console.log("Start")
const a = () => {
    console.log("function call")
};

a();
console.log("end")

//web api settimeout,  call back function will wait in callback queue

console.log("start")
setTimeout(function cb(){
    console.log("callback")
}, 5000)
console.log("end")


//web api DOM apis call back function will wait in callback queue
console.log("Start")

let btn  = document.getElementById("btn")
btn.addEventListener('click', function cb(){
console.log("Button is clicked, so callback function is called")
})

console.log("end")

// fetch() api

console.log("start")
setTimeout(function cbT(){
    console.log("callback")
}, 5000)

fetch("https://api.amazon.com/movies/killbill").then(function cbF(data){
console.log("amazon movies")
})
console.log("end")

// cbT - callsatck queue (setTimeout, event handler)
// cbF - Microtask queue - Microtask queue has a higher priority than the callback queue. (fetch())
