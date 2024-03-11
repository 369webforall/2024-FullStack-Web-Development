
const input = document.getElementById("input")

function check(){
    let value = input.value;

    let reverse = value.split("").reverse().join("")

    if (value === reverse) {
        // alert("Congrats your word is PALINDROME")
        document.getElementById("render").textContent = "Congrats your word is PALINDROME"
    } else {
        // alert("Word is Not a Palindrome")
        document.getElementById("render").textContent = "Word is Not a Palindrome"
    }

    input.value = ""
}