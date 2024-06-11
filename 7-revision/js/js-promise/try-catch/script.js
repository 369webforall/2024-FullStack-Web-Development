

try {
    console.log(a)
} catch(err) {
    console.log(err.name)
    console.log(err.message)  

}finally {
    console.log("This code will run always")
}

console.log("This line will run also")


try {
    let res = prompt("Please enter y or any other character");
    if(res === 'y'){
        throw  new Error("This is custom error")
    }

} catch(err){
    console.log(err.name)
    console.log(err.message)
}