const Users = JSON.parse(localStorage.getItem("users")) || [];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

const registerBtn = document.getElementById("RegisterBtn");
const loginBtn = document.getElementById("loginBtn");


function isUserLogin(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
         if(user.role === "admin"){
            location.href = "../admin_Dashboard/adminDashboard.html";
        }else{
            location.href = "../student_Dashboard/studentDashboard.html";
        }
    }
}


loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = String(document.getElementById("email").value);
    const password = document.getElementById("password").value;

    if( !emailRegex.test(email) ){
        alert("Please Enter a Valid Email.");
        return;
    }

    for(let user of Users){
        if(user.email === email){
            if(user.password === password){
                console.log("login Successfully");
                localStorage.setItem("user", JSON.stringify(user));
                location.href = "../student_Dashboard/studentDashboard.html";
                return;
            }else{
                alert("Invalid credentials");
                return;
            }
        }
    }

    fetch("../../data/users.json").then(response=>{
        return response.json();
    }).then((admins)=>{
        for(let admin of admins){
            if(admin.email === email){
                if(admin.password === password){
                    console.log("login Successfully");
                    localStorage.setItem("user", JSON.stringify(admin));
                    location.href = "../admin_Dashboard/adminDashboard.html";
                    return;
                }else{
                    alert("Invalid credentials");
                    return;
                }
            }
        }
    })
    

    // alert("No user is registered with given email");

})

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    location.href = "../register/register.html";
})

isUserLogin();