function isUserLogin(){
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        location.href = "./Pages/register/register.html";
    }else{
        if(user.role === "admin"){
            location.href = "./Pages/admin_Dashboard/adminDashboard.html";
        }else{
            location.href = "./Pages/student_Dashboard/studentDashboard.html";
        }
    }
}

async function loadDefaultUsers(){

    if(localStorage.getItem("users"))   return;

    try{
        const response = await fetch("./data/users.json");
        const result = await response.json();

        localStorage.setItem("users" , JSON.stringify(result));
    }catch(error){
        console.log(error);
    }finally{
        console.log("Default Users Loaded successfully");
    }
}
loadDefaultUsers();

isUserLogin();

