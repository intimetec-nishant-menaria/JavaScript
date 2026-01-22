
const Users = JSON.parse(localStorage.getItem("users")) || [];

const logoutBtn = document.getElementById("logoutBtn");

function islogIn(){
    const user = localStorage.getItem("user");

    if(!user){
        location.href = "../login/login.html";
    }
}

function displayStudent(){

    const table = document.getElementById("tableBody");
    let counter =1;
    for(let user of Users){
        if(user.role === "student"){
            const tr = document.createElement("tr");

            const trIndex = document.createElement("td");
            trIndex.innerText = counter++;

            const trName = document.createElement("td");
            trName.innerText = user.username;

            const trEmail = document.createElement("td");
            trEmail.innerText = user.email;

            const trTotalMarks = document.createElement("td");
            trTotalMarks.innerText = user.previousMarks ?? "Test Not Attempted";

            tr.append(trIndex , trName , trEmail , trTotalMarks);

            table.append(tr);
        }
    }
}

logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("user");
    islogIn();
})

islogIn();

displayStudent();