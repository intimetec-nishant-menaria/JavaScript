
// type aliase is use to define the structure / shape of an object 

type User = {
    id : string;
    age : number;
    email : string;
}
const us1 : User = {
    id : "123",
    age : 21,
    email : "3006Nish@gmail.com"
}

console.log(us1);
// we cannot do declarative merging with types

//interfaces are also used to define the structre / shape of an object/classes
// we prefer to use interfaces when working with objects and classes as they are much compitable 
// with the classes and objects 

interface person{
    name : string;
    email : string;
}

interface employee extends person{
    employeeID : string;
}

//interface can be reopen and merge

interface person{
    age : number;
}

const emp1 : employee = {
    name : "nishant",
    email : "example@gmail.com",
    employeeID : "123",
    age : 21

}

console.log(emp1);

//literal type when we define const value to a type 

type size = "small" | "medium" | "large";

type APIResopne = "successFul" | "pending" | "reject";

