// array is data type in javascript - []
 
// construct array - [1, 3, 'string', true, [], {}, null, undefined]

// find the length of array - [].length

// methods of array (push, pop, shift, unshift)



let students = [{id:1, name:'john', age: 12, class:5, phone:'+974-665523'}, 
{id:1, name:'john', age: 12, class:5, phone:'+974-665523'}]

console.log(students.length)

let num = [5,6,7,8,9,10]
num.push(100)

console.log(num)

let n = num.pop()

console.log(n)

console.log(num)

num.shift()
console.log(num)

num.unshift(200, 300)
console.log(num)
console.log(num.length)


console.log(num[num.length - 1])

let name = "hello i dev"



let arr = [2,5,6]
arr.push(100)

console.log(arr)

let n5 = arr.pop()
console.log("pop method")
console.log(n5)

arr.unshift(200)
console.log(arr)
console.log(arr.shift())