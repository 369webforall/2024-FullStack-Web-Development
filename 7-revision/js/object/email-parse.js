// Create a function `emailParse` that accepts an email address string as an argument. The function
// should return an object containing `username` and `domain` as keys. See the examples.
// You can assume that the argument will be a valid email address.

const emailParse = function(str){
    let newObj = {}
    let newarr = str.split('@')
    newObj.username = newarr[0]
    newObj.domain = newarr[1]

    return newObj
}

console.log(emailParse("coolcoder42@goodmail.com"));
// { username: 'coolcoder42', domain: 'goodmail.com' }

console.log(emailParse("az@woohoomail.com"));
// { username: 'az', domain: 'woohoomail.com' }

console.log(emailParse("1337pr0graMmer@coldmail.edu"));
// { username: '1337pr0graMmer', domain: 'coldmail.edu' }