

//mapped types 

interface user{
    id: string,
    name : string,
    password : string,
    age? : number
}

// partial<>
//partial make the properties optional even if they are required
const US1 : Partial<user> ={
    name : "Nishant",
};

function fun(User : Partial<user>){
    console.log(User);
}

fun({}); // properties are optional so empty objects are also acceptable
fun({name : "nishant"});
fun({ id : "abc123",name : "nishant"});


//required make all the properties manditory even if they are optional

const newUser : Partial<user>={
    id : "123abc",
    name : "nishnat",
    password : "abc",
    age : 21 // error if we dont decalre age
} 

// readonly makes a variable read only we cant modiefy the data

const newUser1 : Readonly<user> ={
    id : "123",
    name : "nishant",
    password : "qqwe"
}

// newUser1.name = "hello"; //not allowed as the variable is readonly

//Pick -> pick certain properties from the object . like selecting only the properties we need

type userPreview = Pick <user, "name" | "age">

const newUser3 : userPreview ={
    name : "aakash"
}

console.log(newUser3);
