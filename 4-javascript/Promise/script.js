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

// Walk the dog
// clean kitchen
// take out the trash

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walk the dog 🐕‍🦺");
//         callback();
//     },1500)
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You clean the kitchen 🥝");
//         callback()
//     },3000)
// }


// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("You take out the trash 🚜");
//         callback();
//     },500)
// }

// // first use callback function.

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>console.log("all the task is completed"))
//     })
// })

// Promise

function walkDog(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve("You walk the dog 🐕‍🦺");   
        },1500)
    })
    
}

function cleanKitchen(){
    return new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve("You clean the kitchen 🥝");
        
    },3000)
})
}


function takeOutTrash(){
    return new Promise((resolve, rejected)=>{

    setTimeout(()=>{
        let trashTruck = false;
        if(trashTruck){
            resolve("You take out the trash 🚜");
        }else {
            rejected("No trash truck, u canot take out the tash")
        }
           
    },500)
})
}

// walkDog().then((data)=>{
//     console.log(data);

//     return cleanKitchen();
// }).then((data)=>{
//     console.log(data);
//     return takeOutTrash();
// }).then((data)=>{
// console.log(data);
// console.log("All the task is completed")
// }).catch((err)=>console.log(err))

async function workInOrder(){
try {
    const walkdog = await walkDog();
    console.log(walkdog);
    const cleanK = await cleanKitchen();
    console.log(cleanK);
    
    const takeTrash = await takeOutTrash()
    console.log(takeTrash)
    
    console.log("Hey the work is done in squence"); 
} catch (error) {
    console.log(error)
}
}

workInOrder();