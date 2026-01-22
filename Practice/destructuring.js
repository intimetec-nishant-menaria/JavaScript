
// destructuring is only extracting those properties/data from the objects or array that we need

let arr = [1,2,3,4,5]

let [a , b ] = arr;

console.log(a,b);

let obj={
    name : "nishant menaria",
    age : 21,
    city : "udaipur"
}


// also extract property/data and can indentiy them with different name
let {name : fullName , age} = obj;

console.log(fullName , age);

