const Users = JSON.parse(localStorage.getItem("users")) || [];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

const registerBtn = document.getElementById("RegisterBtn");
const loginBtn = document.getElementById("loginBtn");


function redirectIfLoggedIn(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
         if(user.role === "admin"){
            location.href = "../admin_Dashboard/adminDashboard.html";
        }else{
            location.href = "../student_Dashboard/studentDashboard.html";
        }
    }
}


loginBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = String(document.getElementById("email").value);
    const password = document.getElementById("password").value;

    if( !emailRegex.test(email) || email.trim() === "" ){
        alert("Please Enter a Valid Email.");
        return;
    }

    if(password.trim() === ""){
        alert(`password should not be empty`);
        return;
    }

    
    validateCredentials(email , password).then(user=>{
        if(!user){
            alert("invalid credential");
            return;
        }
        localStorage.setItem("user", JSON.stringify(user));
        if(user?.role === "student"){
            location.href = "../student_Dashboard/studentDashboard.html";
        }else if(user?.role === "admin"){
            location.href = "../admin_Dashboard/adminDashboard.html";
        }
    })


})

function validateCredentials(email , password){
    
    return new Promise( (resolve , reject)=>{
        for(let user of Users){
            if(user.email === email){
                if(user.password === password){
                    resolve(user);
                }
            }
        }
        validateAdminCredentials(email , password).then( admin=>{
            resolve(admin);
        }).catch(()=>resolve(undefined));
    })

}

function validateAdminCredentials(email , password){

        return fetch("../../data/users.json").then(response=>{
            return response.json();
        }).then((admins)=>{
            for(let admin of admins){
                if(admin.email === email){
                    if(admin.password === password){
                        return admin;
                    }
                }
            }
        }).catch(error=>{
            console.log(error);
        })
}

registerBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    location.href = "../register/register.html";
})

function init(){
    redirectIfLoggedIn();
}

init();