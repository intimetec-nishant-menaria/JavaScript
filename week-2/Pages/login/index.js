const Users = JSON.parse(localStorage.getItem("users")) || [];

const registerBtn = document.getElementById("RegisterBtn");
const loginBtn = document.getElementById("loginBtn");


function isUserLogin(){
    const user = localStorage.getItem("user");
    if(user){
        location.href = "/week-2/index.html";
    }
}


loginBtn.addEventListener("click",(e)=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    for(let user of Users){
        if(user.email === email){
            if(user.password === password){
                console.log("login Successfully");
                localStorage.setItem("user", JSON.stringify(user));
            }else{
                alert("Invalid credentials");
            }
        }
    }

    // alert("No user is registered with given email");

})

registerBtn.addEventListener("click",(e)=>{
    location.href = "/week-2/Pages/register/register.html";
})

isUserLogin();