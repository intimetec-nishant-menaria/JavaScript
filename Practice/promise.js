
// promices in js are objects that represent eventual completion
// or faliure of an asyncronous task/function


// creating a promise 

//function passed to Promise is called executor
//when new promise is created the executor runs automatically 
// resolve and reject are the arguments of callback provided by the use
//if task is successfuly - promise return with resolve(value);
// if task complete with erroe - promise return with reject(error);

// there are three states of a promise 
// pending
// fulfilled
// rejected

let bool = false;

const p1 = new Promise((resolve , reject)=>{
    if(bool){
        setTimeout(()=>{
            reject(new Error("some error"));
        },5000);
    }

    setTimeout(()=>{
        resolve("value");
    },5000);
});

p1.then( data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log("finally");
})


// using fetch and handeling promise

fetch("https://github.com/intimetec-nishant-menaria").then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})