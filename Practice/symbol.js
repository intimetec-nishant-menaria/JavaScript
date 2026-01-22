

//symbols are unique  and immutable primitive  value introduction in ES6
//use mainly for  object  property keys 

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

const obj ={
    name : "nishant",
    [id1] : 18
}

console.log(obj[id1]);
console.log(Object.getOwnPropertySymbols(obj));

//if we want to use same symbol for same description we can use Symbol.for

id1 = Symbol.for('id');
id2 = Symbol.for('id');

console.log(id1 === id2);

// want ket or descriptor from id 

console.log(Symbol.keyFor(id1));

//use case -  avoide conflict in object property names or  