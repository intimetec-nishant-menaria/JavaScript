

const obj={
    name : "nishant",
    city : "udaipur"
}

console.log(Object.getOwnPropertyDescriptor(obj , "name"));

Object.defineProperty(obj , "surname" , {
    value : "menaria",
});


// Object.defineProperty(obj , "surname" ,{
//     writable : true,
// })


for(let key in obj){
    console.log(key);
}


console.log(Object.getOwnPropertyDescriptor(obj , "surname"));

const obj2 = {};

Object.defineProperties(obj2 , {
    name : {value : "akash" , writable :true , enumerable : true},
    surname : {value : "soni"}
});

console.log(Object.getOwnPropertyDescriptor(obj2 , "name"));
console.log(Object.getOwnPropertyDescriptor(obj2 , "surname"));

// Object.seal(obj);
Object.freeze(obj);

console.log(Object.isSealed(obj));
console.log(Object.isFrozen(obj));