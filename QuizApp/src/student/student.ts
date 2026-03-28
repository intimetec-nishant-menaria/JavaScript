import { ensureUserLoggedIn } from "../auth/auth.js";
import type { User } from "../types/user.js";
import { getData, removeData } from "../utils/localStorage.js";

const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement ;
const quizBtn = document.getElementById("quizBtn") as HTMLButtonElement ;

logoutBtn?.addEventListener("click",()=>{
    removeData("user");
    location.replace("../../HTML_Pages/login.html");
})

quizBtn?.addEventListener("click",()=>{
    if(!confirm("Are you sure you want to start the test?")){
        return;
    }
    location.replace( "../../HTML_Pages/quizPage.html");
});


function displayResult(){

    const user = getData<User>("user");

    if(!user){
        ensureUserLoggedIn();
        return;
    }

    const notAttempted = document.querySelector("#questionsNotAttempted") as HTMLElement;
    const correct = document.querySelector("#correctlyAttempted") as HTMLElement;
    const wrong = document.querySelector('#wrongAttempted') as HTMLElement;
    const totalMarks = document.querySelector("#totalMarks") as HTMLElement;

    notAttempted.textContent = user?.result ? `${user.result?.numberOfQuestions! - user.result?.correct! - user?.result?.wrong!} ` : "Test Not Attempted Yet" ;
    correct.textContent = user?.result ? `${user?.result?.correct}` : "Test Not Attempted Yet" ;
    wrong.textContent = user?.result ?  `${user?.result?.wrong}` : "Test Not Attempted Yet" ;
    totalMarks.textContent = user?.result ?  `${user?.result?.correct}` : "Test Not Attempted Yet" ;
}

displayResult();
