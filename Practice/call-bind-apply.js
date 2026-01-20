
function fullName(hometown){
    console.log(this.firstName + " " + this.lastName + " " + hometown);
}

const obj1={
    firstName : "Nishant",
    lastName : "Menaria",
    sayHello(){
        console.log(`hello ${this.firstName}`);
    }
}

const obj2 = {
    firstName : "akash",
    lastName : "soni"
}


fullName.call(obj1 , "udaipur");
fullName.apply(obj1 , ["udaipur"]);

obj1.sayHello.apply(obj2, []);
obj1.sayHello.call(obj2); //both call and apply are same just call take function parameter as comma seperated values
// and appy take parameters as an array

//difference between bind and call is that bind return a function that binds to that object and that can be called later

let objSpecificFullName = fullName.bind(obj2 , "jaipur");

objSpecificFullName();


