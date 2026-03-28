import { getData, setData } from "../utils/localStorage.js";
import {ensureUserLoggedIn} from "./auth.js"
import type { User } from "../types/user.js";

ensureUserLoggedIn();


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const redirectToRegister = document.querySelector("#RegisterBtn") as HTMLButtonElement;
const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;

redirectToRegister?.addEventListener("click", (e)=>{
    e.preventDefault();
    location.href = "../../HTML_Pages/register.html";   
})

loginBtn?.addEventListener("click",async (e)=>{
    e.preventDefault();
    const email  = (document.getElementById("email") as HTMLInputElement ).value;
    if( !emailRegex.test(email)){
        alert("Enter a valid email");
        return
    }

    const password  = (document.getElementById("password") as HTMLInputElement ).value;

    if( !password.trim() ){
        alert("passwords is required");
        return
    }
    
    const user:User | undefined =await validateCredentials(email,password);

    if(user){
        setData<User>("user",user);
        ensureUserLoggedIn();
    }else{
        alert("invalid credentials");
        return;
    }
})

async function validateCredentials(email : string , password : string) : Promise<User | undefined>{
    const Users = getData<User[]>("users");

    if(Users){
        for(let user of Users){
            if(user.email === email){
                if(user.password === password){
                    return user;
                }else{
                    return undefined;
                }
            }
        }
    }
    return await validateAdminCredentials(email ,password);
}


async function validateAdminCredentials(email:string , password:string){
    
    return await fetch("../../assets/data/users.json").then(response=>{
        return response.json();
    }).then( (admins:User[] )=>{
        for(let admin of admins ){
            if(admin.email === email){
                if(admin.password === password){
                    return admin;
                }else{
                    alert("Invalid email or password");
                    return undefined;
                }
            }
        }
    })
}