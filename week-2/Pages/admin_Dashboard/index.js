const Users = JSON.parse(localStorage.getItem("users")) || [];

const logoutBtn = document.getElementById("logoutBtn");
const quizBtn = document.getElementById("startTestBtn");
const table = document.getElementById("tableBody");


function ensureUserLoggedIn(){
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        location.href = "../login/login.html";
    }
}

function clearTableContent(){
    let tableRows = table.children;

    for(let row of tableRows){
        row.remove();   
    }
}

function displayStudent( callBackFunction ){

    callBackFunction();

    let counter = 1;
    for(let user of Users){
            const tr = document.createElement("tr");

            const reportBtn = document.createElement("button");
            reportBtn.innerText = "Report";
            reportBtn.classList.add("reportBtn");
            reportBtn.dataset.email = user.email ;

            const trIndex = document.createElement("td");
            trIndex.innerText = counter++;

            const trName = document.createElement("td");
            trName.innerText = user.fullName;

            const trEmail = document.createElement("td");
            trEmail.innerText = user.email;

            const trTotalMarks = document.createElement("td");
            trTotalMarks.innerText = user.correct ?? "Test Not Attempted";

            tr.append(trIndex , trName , trEmail , trTotalMarks , reportBtn);

            table.append(tr);
        
    }
}

quizBtn?.addEventListener("click",()=>{
    
    if(confirm("are You sure You want to start the test ?")){
        location.href = "../quiz_Page/quizPage.html";
    }
})

logoutBtn?.addEventListener("click",()=>{
    localStorage.removeItem("user");
    ensureUserLoggedIn();
})

table?.addEventListener("click",(e)=>{
    e.preventDefault();

    if(e.target.tagName !== "BUTTON"){
        return;
    }

    const index = Number(Users.findIndex( user => user.email === e.target.dataset.email ));

    if(index === -1){
        alert(`user not found`);
        return;
    }

    const user = Users[index];

    if(!user){
        alert("test not attempted");
        return;
    }

    alert(`
        Name : ${user.fullName}

        Question Unattempted : ${(user.questionLength - (user.correct + user.wrong ) )?? "test Not Attempted yet"}
        correct : ${user.correct ?? "test Not Attempted yet"}
        wrong : ${user.wrong ?? "test Not Attempted yet"}
        total question : ${user.questionLength ?? "test Not Attempted yet"}
        
        perecntage : ${ (user.correct / user.questionLength ) * 100 ?? "test Not Attempted yet"}%
        `)
})

function init(){
    ensureUserLoggedIn();
    displayStudent(  clearTableContent );
}

init();

