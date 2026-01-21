// async await are just syntatic sugar over promises
// it just provide a clenear and more readable syntax


function promiseOne(){
    
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("success");
        },10000);
    })
}

function promiseTwo(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("success second");
        },5000);
    })
}

// await is the keyword we use inside async function 
// can use await only inside async function and special-case : top level (Modern JS)
async function practice(){
    console.log("first");

    const result = await promiseOne();
    console.log(result);

    const resultTwo = await promiseTwo();
    console.log(resultTwo);
}

// practice();

// special-case : top level (Modern JS)

// const data = await fetch("https://github.com/intimetec-nishant-menaria");
// console.log(data);

//error handling in async and await 

function promiseThree(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            reject(new Error("random error"));
        },2000);
    })
}

async function practiceTwo(){
    try{

        const data = await promiseThree();
        console.log(data);

    }catch(error){
        console.log(error);
    }finally{
        console.log("finally");
    }
}

practiceTwo();