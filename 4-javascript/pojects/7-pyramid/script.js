
let btn = document.getElementById('btn');
btn.addEventListener('click', BuildPyramid);

function BuildPyramid(){
    document.getElementById('pyramid').value =""
let num = Number(document.getElementById('num').value);
console.log(num)
for(let i = 1; i <= num; i++){
    let row = document.createElement('div'); // 
        row.classList.add('row');
    for(let j =0; j < i; j++){
        let block = document.createElement('div');
        block.classList.add('block')
        row.append(block)
        console.log(row)
    }
let pyramid = document.getElementById("pyramid")
pyramid.append(row)
}

}