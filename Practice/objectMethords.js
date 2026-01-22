

let obj = {
    name : "nishant",
    age : 21,
    address : {
        city : "udaipur",
        state : "rajastha",
        country : "india"
    },

    geeting(){
        console.log(`Hello ${name}`);
    }
}

// Object.entries

console.log(Object.entries(obj));

//Object.keys

console.log(Object.keys(obj));

//Onject.values

console.log(Object.values(obj));