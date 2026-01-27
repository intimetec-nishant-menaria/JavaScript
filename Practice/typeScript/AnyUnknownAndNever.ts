

// any turn off the ts . if a variable is any then there is no type checking fot it

let z : any ;

z= "hello";
z = 21 ;
z = true;
console.log(z);

// unknow is like any but safer . we need to tell ts before using the what type it is
let Z : unknown;
Z= "hello";
Z = 21 ;

if(typeof Z ==="string"){
    console.log(Z);
}else if(typeof Z ==="number"){
    console.log(Z);
}

