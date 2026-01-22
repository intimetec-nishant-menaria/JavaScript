const Users = JSON.parse(localStorage.getItem("users")) || [];

function redirectToLogin(){
    location.href = "../login/login.html" ;
}

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

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const firstName = document.getElementById("FirstName").value;
    const lastName =document.getElementById("LastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    for(let user of Users){
        if(user.email === email){
            alert(`user with this email Id already exists`);
            return;
        }
    }

    const user = {
        username : firstName + " " + lastName,
        email : email,
        password : password,
        role : "student"
    }

    Users.push(user);
    localStorage.setItem("users",JSON.stringify(Users));

    location.href = "../login/login.html";
})


isUserLogin();
