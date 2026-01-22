
//map is a collection  of ket value pair , like an object by better

// maintain insertation order
//better peformance for larger data

const mp = new Map([
    ["name" , "nishant"],
    ["age",21]
])

console.log(mp);

//map methords

//map.set();

mp.set("city","udaipur");
console.log(mp);

//map.get()

console.log(mp.get("name"));
console.log(mp.get("Name")); // undefine when  no such key exists

//mp.has()

console.log(mp.has("name"));

//mp.delete()

mp.delete("city");
console.log(mp);

//mp.size

console.log(mp.size);

//mp.clear()
mp.clear();
console.log(mp);

//weak map the keys should be of object only and these are not iterable and have no size propert 

let key  = {id : 1};

const mp1 = new WeakMap();

mp1.set(key , "data");
key = null // now this key can be collect by GC
console.log(mp1);

// weak map are used for  private data storage  and memory efficiency 