let body = document.body;

function setColor(color){
body.style.backgroundColor = color;
}

// let's generate the random color and also hex color//

// function randomColor(){
//     let red = Math.floor(Math.random()*255)
//     let green = Math.floor(Math.random()*255)
//     let blue = Math.floor(Math.random()*255)
//     let color = `rgb(${red}, ${green}, ${blue})`
//     body.style.backgroundColor = color;

// }



function randomColor(){
  let hexcode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let color = "#"
;
for(let i =0; i<6; i++){
    let random = Math.floor(Math.random() * hexcode.length);
color += hexcode[random]
}
console.log(color)

    body.style.backgroundColor = color;

}