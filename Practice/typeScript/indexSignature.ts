

// index signature are used when we dont know the name of the property but we know the data type of the property and its related value

interface user3 {
    [key : string ] : string; // now we can have any number of properties in user that have key as string and value also as string
}

const user5:user3 ={
    name : "nishant",
    email : "3006nisha@gmail.com"
} 

console.log(user5);

//Eg

interface err {
    [key : string] :string;
}

const errors : err = {
    email : "invalid email",
    password : "invalid password"
}

console.log(errors);

// interface User {
//   id: number;
//   name: string;
//   [key: string]: string; // this will give error because id is an number 
// }
