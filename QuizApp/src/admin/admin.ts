import { isUserLogin } from "../auth/auth.js";
import { removeData } from "../utils/localStorage.js";

const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement ;

logoutBtn?.addEventListener("click",()=>{
    removeData("user");
    isUserLogin();
})