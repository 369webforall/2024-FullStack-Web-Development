// find the area, circuference and diameter from give array;

let radius = [2,6,8,7,4]
    
// area = Math.PI*r*r

// diameter = 2 * r

// circuference = 2 * Math.PI * r


function area(){
    let output = []
    for(let i =0; i < radius.length; i++){
        let r = radius[i]
        output.push(Math.floor(Math.PI*r*r))
    }
return output;

}

console.log(area())

// DRY code

function diameter(){
    let output = []
    for(let i =0; i < radius.length; i++){
        let r = radius[i]
        output.push(Math.floor(2 * r))
    }
return output;

}

console.log(diameter())

function circuference(){
    let output = []
    for(let i =0; i < radius.length; i++){
        let r = radius[i]
        output.push(Math.floor(2*Math.PI* r))
    }
return output;

}

console.log(circuference())