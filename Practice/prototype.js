

const obj = {
    name : "nishant",
    city : "udaipur",

    sayHello(){
        console.log(this.name + " from " +this.city);
    }
}

const obj2={
    name : "akash"
}

obj2.__proto__ = obj;
console.log(obj2.__proto__ === obj);
console.log(obj2.__proto__.__proto__ === Object.prototype);
console.log(obj2.__proto__.__proto__.__proto__ === null);

console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf([]));

obj2.sayHello();
obj.sayHello();