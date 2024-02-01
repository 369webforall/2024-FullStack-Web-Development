// Write a function `commonElements` that accepts two arrays as arguments. The function should return
// a new array containing the elements that are found in both of the input arrays. The order of
// the elements in the output array doesn't matter as long as the function returns the correct elements.

const commonElements = function(arr1, arr2){
    let resultArr = []

    for(let i =0; i < arr1.length; i++){
        let element = arr1[i]
        if(arr2.includes(element)){
            resultArr.push(element)
        }
    }
return resultArr;
}
let arr1 = ["a", "c", "d", "b"];
let arr2 = ["b", "a", "y"];
console.log(commonElements(arr1, arr2)); // ['a', 'b']

let arr3 = [4, 7];
let arr4 = [32, 7, 1, 4];
console.log(commonElements(arr3, arr4)); // [4, 7]