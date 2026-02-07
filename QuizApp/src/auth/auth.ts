import type { User } from "../types/user.js";
import { getData } from "../utils/localStorage.js";


export function ensureUserLoggedIn(){
    const user= getData<User>("user");

    const currentPath = location.pathname;

    if(!user){
        if( !(currentPath.endsWith("login.html")  || currentPath.endsWith("register.html") ) ){
            location.href = "../../HTML_Pages/login.html"
        }
    }else{

        switch(user.role){
            case "student":{
                location.href = "../../HTML_Pages/studentDashBoard.html"
                break;
            }

            case "admin" :{
                location.href = "../../HTML_Pages/adminDashBoard.html"
                break;
            }
        }
    }
}