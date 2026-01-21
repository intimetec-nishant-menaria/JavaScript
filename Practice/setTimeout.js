
// execute an callback fuction after a delay 
// does not garauntee that the function will exactly execute after the time delay
// the function can execute any time after the timedelay when call stack is empty 

const id = setTimeout(()=>{
    console.log("hello");
},2000);

console.log(id);

// we can clearTimeou using clearTimeout function

clearTimeout(id);

// passing arguments in settimeout

setTimeout((name)=>{
    console.log(`hello ${name}`);
},2000,"Nishant");