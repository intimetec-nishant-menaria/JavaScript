
// it executes an callback function after a fix time interval (executes an function again & again after an fix delay until we clear the interval)

const id = setInterval(()=>{
    console.log("hello");
},2000);

setTimeout(()=>{
    clearInterval(id);
},7000);