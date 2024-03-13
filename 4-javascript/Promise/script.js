// promise is object = {}
// status of promise = pending, fullfilled and rejected.
// new Promise((resolve, reject)=>{})

// let promise = new Promise((resolve, reject)=>{})

// console.log(promise)

// function driveCar(){
//     return new Promise((resolve, reject)=>{
//         let licence = false;
//         if(licence){
//             resolve("Your can drive")
//         }else {
//             reject("You canot drive")
//         }
//     })
// }

// let promise = driveCar()

// driveCar()
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog 🐕");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean kitchen 🔪");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You takeout trash 🚜");
    }, 500);
  });
}

async function workOrder(){
const walkdog = await walkDog();
console.log(walkdog);

const clean =await cleanKitchen();
console.log(clean)

const trash = await takeOutTrash();
console.log(trash)
console.log("All the work is completed")
}

workOrder();