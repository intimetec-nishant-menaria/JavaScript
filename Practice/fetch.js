
// fetch is an web API use to make http request (GET ,POST , PUT ,DELETE etc) 
// if we dont specify any methord we usually request usign GET methord

const response = await fetch("https://api.thecatapi.com/v1/images/search");
console.log(response);

// responce object have
// response.ok (true if it between 200-299)
// respose.status
// response.header
// response.url (the url from where the response came)


// specific request 

// fetch("EXAMPLE_URL",{
//     method : "method",
//     headers :{
//         // attributes we want to set inside header
//     },
//     body : JSON.stringify({
//         // data that we want to post , put or delete
//     })
// })