// generics are the function that can work with multiple data type while keeping type safety
function generic<T>(a : T){
    console.log(a);
}

generic("10");
generic(10);
generic(true);

// multiple parameters

function pair<A,B>(a : A , b :B):[A,B]{
    return [a,b];
}

let x = pair("10",10);
console.log(x);


//generic constrains

function logLength<T extends {length : number} >(a : T){
    console.log(a.length);
}

// logLength(10); // error cause number dont have length property 

logLength("Nishant");