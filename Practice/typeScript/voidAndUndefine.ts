// we use void when the function does not return anything or we dont care what it return

function Greet():void{
    console.log("Hello");
}

Greet();


// in undefine the function must return undefined explicitely
function fun():undefined{ 
    console.log("Hello");
    return undefined;
}

// eg - using undefined in real life 
// searching for something in db and if we dont find it api return undefined 
