
//arrays 

let arr2 : number[] = [1,2]; 
arr2.push(3);
arr2.push(4);

console.log(arr2);

//multidimential array

let multArray : number[][] = [
    [1,2,3],
    [4,5,6]
]
console.log(multArray);

let arr1:readonly number[] = [1,2,3,4];

// arr1.push(5) gives error cause array is readonly
console.log(arr1);

// readonly properties cannot be modified

type user1 = {
    readonly id : string,
    name : string,
}

const us: user1 = {
    id : "1",
    name : "nishant"
}

// us.id = "2" this will give error as the property is readonly

//tuples are array in ts where number of elements are fixed and there type can differ

//eg-

let tuppleEG :[string , number];

tuppleEG = ["nishant",12]; // cant interchange the data must be in the smae order as defined
console.log(tuppleEG);

let tuppleEG2 : [string , number , number?];

tuppleEG2 = ["hello" , 21];
console.log(tuppleEG2);

tuppleEG2 = ["hello" , 21 ,22] ;
console.log(tuppleEG2);


