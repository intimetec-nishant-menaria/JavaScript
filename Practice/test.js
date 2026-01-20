
function Person(name){
    this.name = name;
}

const p1 =new Person("Nishant");
console.log(window.name);
console.log(this);