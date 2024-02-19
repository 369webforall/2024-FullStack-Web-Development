const Arithmetics = {
	add:(a, b) => {
		return `${a} + ${b} = ${a+b}`;
	},
	subtract:(a, b) => {
		return `${a} - ${b} = ${a-b}`
	},
	multiply:(a, b) => {
		return `${a} * ${b} = ${a*b}`
	},
	division:(a, b) => {
		if(b!=0) return `${a} / ${b} = ${a/b}`;
		return `Cannot Divide by Zero!!!`;
	}

}

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));
console.log(Arithmetics.multiply(5, 5));
console.log(Arithmetics.division(100, 5));

// higher order function


//find the area,  circumference and diameter from the given array of radius.
//Formula:
//area - PI*r*r
//circumference - 2*PI*r
//diameter - 2 * r

//Write a function calculateArea, calculateCircumference, calculateDiameter.


const radius =[2,5,3,4,6];


function area(r) {
  return Math.PI * r * r;
}

function circumference(r) {
  return 2 * Math.PI * r;
}

function diameter(r) {
  return 2 * r;
}

function calculate(radius, logic) {
  let area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(logic(radius[i]));
  }
  return area;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
