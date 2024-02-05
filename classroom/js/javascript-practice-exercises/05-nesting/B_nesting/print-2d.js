// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

const print2d = function(arr){
    for(let i =0; i <arr.length; i++){
        let innerArr = arr[i] 
        for(let j =0; j < innerArr.length; j++){
            console.log(innerArr[j])
        }
        
    }
}

let array1 = [
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
  ];
  print2d(array1);
  // prints
  //  a
  //  b
  //  c
  //  d
  //  e
  //  f
  //  g
  //  h
  //  i
  
  let array2 = [[9, 3, 4], [11], [42, 100]];
  print2d(array2);
  // prints
  //  9
  //  3
  //  4
  //  11
  //  42
  //  100