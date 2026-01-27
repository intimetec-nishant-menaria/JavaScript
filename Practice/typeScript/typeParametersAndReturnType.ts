

// functions 

function sum (a: number , b : number) : number {
    return a+b; // we also dont need to explecitely declare the return type as the ts infers it
}

// function expression

const Sum =(a : number , b: number ) => a+b;

console.log(Sum(2,3),sum(1,2));

// optional parameters

function greeting(name :string , age?: number){ // optional parameters must be written at the end (age?:number , name : string) // this will give error
    if(age){
        console.log(`hello ${name} your age is ${age}`);
    }else{
        console.log(`hello ${name}`);
    }
}

greeting("nishant");
greeting("nishant",21);

//defaultParameter

function greet(name:string = "Guest"){
    console.log(`hello ${name}`);
}

//default parameters ar by default optional;

greet();
greet("Nishant");