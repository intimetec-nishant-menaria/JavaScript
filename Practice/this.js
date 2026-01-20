"use strict";


console.log(this);

function x(){
    console.log(this);
}

x();


const obj = {
    name : " nishant",
    fun(){
        console.log(this);
    }
}

obj.fun();


function printName(age){
    console.log(this.name , age);
}

printName.call(obj , "18");

printName.apply(obj , [18]);

const obj2 = {
    name: "hello",

    x : ()=>{
        console.log(this);
    }
}

obj2.x();

const obj3 = {
    name : "hello",
    x : function(){
        let y = ()=>{
            console.log(this);
        }
        y();
    }
}

obj3.x();