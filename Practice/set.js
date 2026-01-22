
// set is a collect of unique elements

let arr = [1,1,2,2,2,3,3,3];

let st = new Set(arr);

console.log(st);

st = new Set(["nishant" , "nishant" , "menaria" , "a" , "a" ,"b"]);

console.log(st);

//different set methors 

// set.add()

st.add(5);
console.log(st);

//set.has()

console.log(st.has("nishant"));
console.log(st.has("Nishant")); // case sensetive

//set.delete()

st.delete("nishant");
console.log(st);

//set.size

console.log(st.size);

//set.clear() //remove all elements 
st.clear();
console.log(st);

//weak set
// wak set holda only ojects and are not iterable and have no .size property and they are collected by garbage collectors

// const st2 = new WeakSet([1 ,2 ,2,3]);  this give error cuz we are making set with array not objects
let obj1 = { id : 1 , name : "nishant"};

const st2 = new WeakSet();

st2.add(obj1);
obj1 = null // mow the object is collected by the GC
console.log(st2);

// weak set are used for memory efficiency  and tracking objects without preventing GC