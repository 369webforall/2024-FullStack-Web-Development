// datatype
// string - "asdfasdfasdf[]{}  "
// number - 12, 0.5,
// boolean - true / false
// null, undefined

// array - [{}]

// object - {name:"dev", age: 45}

// prototype

function FullName(name, age){
this.name = name;
this.age = age
}

FullName.prototype.getInfo = function(){
    console.log(this.name)
}
const name1 = new FullName("Dev", 45)

// prototype is object created when we define contructor function.


function add(n1, n2, n3){

}


let result = add(5,8, 15)