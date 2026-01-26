
const Users = JSON.parse(localStorage.getItem("users")) || [];

const logoutBtn = document.getElementById("logoutBtn");
const quizBtn = document.getElementById("startTestBtn");
const table = document.getElementById("tableBody");

function islogIn(){
    const user = localStorage.getItem("user");

    if(!user){
        location.href = "../login/login.html";
    }
}

function displayStudent(){

    let counter =1;
    for(let user of Users){
            const tr = document.createElement("tr");

            const reportBtn = document.createElement("button");
            reportBtn.innerText = "Report";
            reportBtn.classList.add("reportBtn");
            reportBtn.dataset.index = counter;

            const trIndex = document.createElement("td");
            trIndex.innerText = counter++;

            const trName = document.createElement("td");
            trName.innerText = user.username;

            const trEmail = document.createElement("td");
            trEmail.innerText = user.email;

            const trTotalMarks = document.createElement("td");
            trTotalMarks.innerText = user.correct ?? "Test Not Attempted";

            

            tr.append(trIndex , trName , trEmail , trTotalMarks , reportBtn);

            table.append(tr);
        
    }
}

quizBtn.addEventListener("click",()=>{
    
    if(confirm("are You sure You want to start the test ?")){
        location.href = "../quiz_Page/quizPage.html";
    }
})

logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("user");
    islogIn();
})

table.addEventListener("click",(e)=>{
    e.preventDefault();

    const user = Users[Number(e.target.dataset.index)-1];
    console.log(user);

    if(!user){
        alert("test not attempted");
        return;
    }

    alert(`
        Name : ${user.username}

        Question Attempted : ${user.questionLength - (user.correct + user.wrong ) ?? "test Not Attempted yet"}
        correct : ${user.correct ?? "test Not Attempted yet"}
        wrong : ${user.wrong ?? "test Not Attempted yet"}
        total question : ${user.questionLength ?? "test Not Attempted yet"}
        
        perecntage : ${ (user.correct / user.questionLength ) * 100 ?? "test Not Attempted yet"}%
        `)
})

islogIn();

displayStudent();