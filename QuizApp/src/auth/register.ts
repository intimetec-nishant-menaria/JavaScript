import type { User } from "../types/user.js";
import { getData, setData } from "../utils/localStorage.js";
import {ensureUserLoggedIn} from "./auth.js";


const Users = getData<User[]>("users") || [];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

ensureUserLoggedIn();

const redirectToLogin = document.querySelector("#redirectToLogin") as HTMLButtonElement;
const registerBtn = document.querySelector("#registerBtn") as HTMLButtonElement;

redirectToLogin?.addEventListener("click", (e)=>{
    e.preventDefault();
    location.href = "../../HTML_Pages/login.html";   
})


registerBtn?.addEventListener("click",(e)=>{
    e.preventDefault();

    const firstName  = (document.getElementById("FirstName") as HTMLInputElement ).value;
    const lastName  = (document.getElementById("LastName") as HTMLInputElement ).value;

    if(firstName.trim() === "" || lastName.trim() === ""){
        alert("firstName and lastName is required");
        return
    }

    const email  = (document.getElementById("email") as HTMLInputElement ).value;
    if( !emailRegex.test(email) ){
        alert("Enter a valid email");
        return
    }

    const password  = (document.getElementById("password") as HTMLInputElement ).value;
    if(!passwordRegex.test(password)){
        alert(`Please enter valid password
            Rules:
                1) At least 8 characters
                2) At least 1 lowercase
                3) At least 1 uppercase
                4) At least 1 number
                5) At least 1 special character`
        );
        return ;
    }

    for(let user of Users){
        if(user.email === email){
            alert(`${email} is already registered`)
            return;
        }
    }

    const newUser : User ={
        fullName : `${firstName} ${lastName}`,
        email : email,
        password : password,
        role : "student"
    }

    Users.push(newUser);
    console.log(Users);
    setData("users",Users);
    location.href = "../../HTML_Pages/login.html"
})