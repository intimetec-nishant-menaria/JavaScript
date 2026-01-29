import { isUserLogin } from "../auth/auth.js";
import { removeData } from "../utils/localStorage.js";

const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement ;
const quizBtn = document.getElementById("quizBtn") as HTMLButtonElement ;

logoutBtn?.addEventListener("click",()=>{
    removeData("user");
    isUserLogin();
})

quizBtn?.addEventListener("click",()=>{
    if(!confirm("Are you sure you want to start the test?")){
        return;
    }
    location.href = "/QuizApp/HTML Pages/quizPage.html";
});