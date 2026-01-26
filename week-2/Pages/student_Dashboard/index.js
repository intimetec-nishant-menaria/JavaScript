
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

    const questionNotAttempted = document.getElementById("questionsNotAttempted");
    const correctAttempted = document.getElementById("correctlyAttempted");
    const wrongAttempted = document.getElementById("wrongAttempted");
    const totalMarks = document.getElementById("totalMarks");

    console.log(user.questionLength);
    questionNotAttempted.innerText = user.questionLength - (user.correct + user.wrong ) || "Test Not Attempted yet";
    correctAttempted.innerText = user.correct ?? "Test Not Attempted yet";
    wrongAttempted.innerText = user.wrong ?? "Test Not Attempted yet";
    totalMarks.innerText = user.correct ?? "Test Not Attempted yet";
}

displayPreviousMarks();

islogIn();