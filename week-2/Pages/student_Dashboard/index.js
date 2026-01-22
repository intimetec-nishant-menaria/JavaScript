
const logoutBtn = document.getElementById("logoutBtn");
const quizBtn = document.getElementById("quizBtn");

function islogIn(){
    const user = localStorage.getItem("user");

    if(!user){
        location.href = "../login/login.html";
    }
}

logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("user");
    islogIn();
})

quizBtn.addEventListener("click",()=>{
    
    if(confirm("are You sure You want to start the test ?")){
        location.href = "../quiz_Page/quizPage.html";
    }
})

function displayPreviousMarks(){
    const user = JSON.parse(localStorage.getItem("user"));

    islogIn();

    const marks = document.getElementById("previousMarks");

    marks.innerText = user.previousMarks ?? "Test Not Attempted yet"
}

displayPreviousMarks();

islogIn();