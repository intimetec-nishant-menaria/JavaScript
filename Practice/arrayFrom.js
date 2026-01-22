

// Array.from() is used to convert array like or iterable objects to array


let str = Array.from("Nishant");

console.log(str);


// this give empty erray because this is not an iterabel object 
//an iterable object are objects that we can iterabt using for..of  like set ,map , strings
let obj = {
    name : "nishant",
    age : 21
}
let a = Array.from(obj);

console.log(a);
