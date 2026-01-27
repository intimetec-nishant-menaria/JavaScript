

function addition(...numbers:number[]):number{
    return numbers.reduce((acc , curr)=> acc + curr , 0);
}

console.log(addition(1,2,3,4,5));