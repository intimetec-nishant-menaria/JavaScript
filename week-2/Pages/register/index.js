const Users = JSON.parse(localStorage.getItem("users")) || [];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const registerBtn = document.getElementById("registerBtn");
const redirectToLoginBtn = document.getElementById("redirectToLoginBtn");


redirectToLoginBtn?.addEventListener("click" ,()=>{
    location.href = "../login/login.html";
})


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


registerBtn?.addEventListener("click",(e)=>{
    e.preventDefault();

    const firstName = document.getElementById("FirstName").value;
    const lastName =document.getElementById("LastName").value;

    if(firstName.trim()==="" || lastName.trim()===""){
        alert("First and Last name is required");
        return;
    }

    const email = String(document.getElementById("email").value);
    const password = String(document.getElementById("password").value);

    
    if( !emailRegex.test(email) || email.trim()==="" ){
        alert("Please Enter a Valid Email.");
        return;
    }
    if( !passwordRegex.test(password) || password.trim()==="" ){
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


    
    if(Users.some( user=>user.email===email )){
        alert(`user with this email Id already exists`);
        return;
    }

    const user = {
        fullName : firstName + " " + lastName,
        email : email,
        password : password,
        role : "student"
    }

    Users.push(user);
    localStorage.setItem("users",JSON.stringify(Users));

    location.href = "../login/login.html";
})



function init(){
    redirectIfLoggedIn();
}

init();
