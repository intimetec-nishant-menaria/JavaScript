
// spread is used expand the array or object 
// but if we copy nested array or objects using spread the copy was shallow 

let arr = [1,2,3,4]

let arr2 = [...arr , 5,6];

console.log(arr2);


//this is example of rest operation it collects the data and collect them into an array
function sum(...nums){
    return nums.reduce( (acc ,curr)=> curr + acc ,0);
}

console.log(sum(...arr2));

//nested object / array copy using spread

let arr3 = [ 1 , 2 , 3 , [4,5,6] ];

let arr4 = [...arr3]

arr4[3][0]=7;

console.log(arr3);

//its shallow copy so the original data got change and its simiplar with objects
