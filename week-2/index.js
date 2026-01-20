


function isUserLogin(){
    const user = localStorage.getItem("user");

    if(!user){
        location.href = "/week-2/Pages/register/register.html";
    }
}

isUserLogin();

