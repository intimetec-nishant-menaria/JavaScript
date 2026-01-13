
let screenContent="";

const screen = document.getElementById('screen');

function addToScreen(value){
    screenContent+=value;
    screen.textContent = screenContent;
}

function removeFromScreen(){
    screenContent = screenContent.slice(0 ,-1);
    screen.textContent = screenContent;
}

function clearAll(){
    screenContent="";
    screen.textContent = screenContent;
}

function equalsTo(){
    try{
        screenContent = eval(screenContent).toString();
        screen.textContent = screenContent;
    }catch(error){
        console.log("error"+error);
        alert("enter a valid expression");
        clearAll();
    }
}