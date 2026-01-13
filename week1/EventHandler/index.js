
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button)=>{
    button.addEventListener("click" , (event)=>{
        let btnValue = event.target.value;  
        playnote(btnValue);
    })
})

function playnote(note){
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}