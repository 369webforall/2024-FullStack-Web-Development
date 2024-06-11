// // how we create promise

// let p = new Promise((resolve, reject)=>{

//     let sucess = true;

//     if(sucess){
//         resolve("The data is received 10")
//     } else {
//         reject("Failed to receive the data")
//     }

// })

// console.log(p)

// p.then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(console.log("It will run no  matter what"))



// // async await

// let p2 = new Promise((resolve, reject)=>{
//     resolve('Promise is resolve and value is correct')
//   })
  
  
//   async function handlePromise(){
//     const res = await p2;
//     console.log(res)
//   }
  
//   handlePromise();


  // difference using then and await

  const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Promise is resolved after 3000ms')
    }, 3000)
    })
    
    
    function getData(){
    
      // js engine will not wait for promise to resolve.
      p3.then((res)=>console.log(res));
    
      console.log("Js engine will not wait to run next line of code and i am the proof")
    
    
    }
    
    //getData();


    // async await

    const p5 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve('Promise is resolved after 3000ms')
        }, 3000)
        })
        
        
        async function handlePromise(){
          const res = await p5;
          console.log(res)
          console.log("code execution will wait till the promise is resolved")
        }
        
        handlePromise();
    
