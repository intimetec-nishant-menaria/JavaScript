import type { User } from "../types/user.js";
import { getData } from "../utils/localStorage.js";


export function ensureUserLoggedIn(){
    const user= getData<User>("user");

    const currentPath = location.pathname;

    if(!user){
        if( !(currentPath.endsWith("login.html")  || currentPath.endsWith("register.html") ) )
        location.href = "/QuizApp/HTML Pages/login.html"
    }else{

        switch(user.role){
            case "student":{
                location.href = "/QuizApp/HTML Pages/studentDashBoard.html"
                break;
            }

            case "admin" :{
                location.href = "/QuizApp/HTML Pages/adminDashBoard.html"
                break;
            }
        }
    }
}