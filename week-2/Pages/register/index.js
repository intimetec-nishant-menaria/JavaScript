const Users = JSON.parse(localStorage.getItem("users")) || [];

function redirectToLogin(){
    location.href = "/week-2/Pages/login/login.html" ;
}

function isUserLogin(){
    const user = localStorage.getItem("user");

    if(user){
        location.href = "/week-2/index.html";
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
        Name : firstName + " " + lastName,
        email : email,
        password : password
    }

    Users.push(user);
    localStorage.setItem("users",JSON.stringify(Users));

    location.href = "/week-2/Pages/login/login.html";
})


isUserLogin();
