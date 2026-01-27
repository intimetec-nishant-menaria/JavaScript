

// union means a variable can have one of the values we can think it as OR

let x : number | string ;

x = 10; 
console.log(x);

x = " nishant";
console.log(x);

// intersection means a object have all the properties 

type user ={
    id : string;
    name : string;
    email : string;
}

type admin = user & { role : string};

const adm : admin={
    id : "123",
    name : "nishant",
    email : "admin@gmail.com",
    role : "admin"
}

console.log(adm);
