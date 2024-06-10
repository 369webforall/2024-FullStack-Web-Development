// find the area, circuference and diameter from give array;

 
    
    // area = Math.PI*r*r

    // diameter = 2 * r

    // circuference = 2 * Math.PI * r

    let radius = [2,6,8,7,4]

    let area = function(r){
        return Math.floor(Math.PI*r*r)
    }

    let diameter = function(r){
        return Math.floor(2*r)
    }

    let circuference = function(r){
        return Math.floor(2*Math.PI*r)
    }


    function calculate(radius, logic){
        let output = []
        for(let i =0; i < radius.length; i++){
            let r = radius[i]
            output.push(logic(r))
        }
    return output;

    }

    
    console.log(calculate(radius, area))
    console.log(calculate(radius, diameter))
    console.log(calculate(radius, circuference))