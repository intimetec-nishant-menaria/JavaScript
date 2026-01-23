
let counter=0;

function getData(){
    //fetching data making api calls
    console.log("fetching data" , ++counter);
} 



function debouncing(callBack , delay){
    let timer ;

    return function(){
        clearInterval(timer);
        timer = setTimeout(()=>{
            callBack();
        }, delay);
    }
}

const betterFunction = debouncing(getData , 300);