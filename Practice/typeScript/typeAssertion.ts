

// type assertion means when we tell ts that what was the type of the variable use when we are sure about the data

// mostly used when selection html elements , API responces

// const tag = document.getElementById("") as HTMLInputElement;

// this is type assertion whe told ts trust me . the type of data is this

let y : any ;

y = "hello";

console.log((y as string).toUpperCase());