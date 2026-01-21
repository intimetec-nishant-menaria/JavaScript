
// callback are the fuction that are passed as an argument  to another function and that function 
// have control when to call the callback function


function printName(name,greeting){
    console.log(`hello ${name}`);
    greeting();
}

function greeting(){
    console.log("good morning");
}

printName("nishant",greeting);

// 1)Examples of inbuild callbacks are:
// map , filter , reduce etc

// 2)issues with callBacks 
//      callback hell
//      inversion of control - (control over the callback was shift to the fuction that may be written by other developer , intern or a third party  and my not call or handle our function properly)

//callBack hell
//when multiple asyncronous function are nested inside one another 

//example - e-commerce ordering something 

function validateCart(cart , callBack){
    //validate cart logic
    let p1 = callBack();
    console.log(p1);
    return p1;
}
function proceedToPayment(cart ,callBack){
    let p1 = callBack();
    console.log(p1);
    return p1;
}
function validatePayment(callBack){
    let p1 = callBack();
    console.log(p1);
    return p1;
}
function updateCartAndWallet(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("order Successful");
        },5000);
    })
}


let result = validateCart(["some","list ","of ","things"],(cart)=>{
    //if cart validates true proceed to payment
    return proceedToPayment( cart , ()=>{
        //paymentLogic
        return validatePayment(()=>{
            //ValidationLogic
            return updateCartAndWallet();
        })
    })
})

//issue our code started growing horizantly instead of vertically this  make code less maintainable , hard to debug etc;

console.log(result);
setTimeout(()=>{
    console.log(result);
},7000);