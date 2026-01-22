const question = document.querySelector(".question");
const optionBtns = document.querySelectorAll(".options button")
const options = document.querySelector(".options");
const answerSheet = JSON.parse(localStorage.getItem("answers")) || [];
let questionsList = JSON.parse(localStorage.getItem("questions")) || [];
let currentQuestion = Number(localStorage.getItem("Cquestion")) || 0;
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("previousBtn");


function isUserLogin(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
        location.href = "../login/login.html";
    }
}

options.addEventListener("click",(e)=>{
    e.preventDefault();

    if(e.target.tagName != "BUTTON")    return;

    optionBtns.forEach( btn => {
        btn.classList.remove("btnActivate");
    });
    answerSheet[currentQuestion] = e.target.textContent;
    localStorage.setItem("answers",JSON.stringify(answerSheet));

    e.target.classList.add("btnActivate");
})


async function loadQuestions(){
    const responce = await fetch("../../data/quiz.json");
    const result = await responce.json();

    localStorage.setItem("questions", JSON.stringify(result));
    localStorage.setItem("Cquestion","0");
    questionsList = result;
    loadQuestion();
}

function loadQuestion(){
    if(currentQuestion === 0){
        prevBtn.disabled = true;
        prevBtn.style.opacity = 0.5;
    }else{
        prevBtn.disabled = false;
        prevBtn.style.opacity = 1;
    }

    if(currentQuestion === (questionsList.length-1)){
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }else{
        submitBtn.style.display = "none";
        nextBtn.style.display = "block";
    }

    question.textContent = questionsList[currentQuestion].question ;
    for(let i = 0 ; i < optionBtns.length ; i++){
        optionBtns[i].textContent = questionsList[currentQuestion].options[i];
        optionBtns[i].classList.remove("btnActivate");
        if(answerSheet.length > currentQuestion){
            if(answerSheet[currentQuestion] === questionsList[currentQuestion].options[i]){
                optionBtns[i].classList.add("btnActivate");
            }
        }
    }
    localStorage.setItem("Cquestion",currentQuestion);
}

nextBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    currentQuestion++;
    optionBtns.forEach( btn => {
        btn.classList.remove("btnActivate");
    });
    loadQuestion();
    localStorage.setItem("answers",JSON.stringify(answerSheet));
})

prevBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    currentQuestion--;
    loadQuestion();
    localStorage.setItem("answers",JSON.stringify(answerSheet));
})

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(confirm("Are you sure you want to Submit ?")){
        let totalMarks = 0 ;

        const answers = JSON.parse(localStorage.getItem("answers"));
        for(let i = 0 ; i < answers.length ; i++){
            if(answers[i] === questionsList[i].options[questionsList[i].correctAnswerIndex])
                    totalMarks++;
        }

        localStorage.removeItem("answers");
        localStorage.removeItem("questions");
        localStorage.removeItem("Cquestion");

        const user = JSON.parse(localStorage.getItem("user"));
        user.previousMarks = totalMarks;

        console.log(user);
        localStorage.setItem("user",JSON.stringify(user));

        const Users = JSON.parse(localStorage.getItem("users"));

        for(let i = 0 ; i < Users.length ; i++){
            if(Users[i].email === user.email){
                Users[i] = user;
                localStorage.setItem("users",JSON.stringify(Users));
                break;
            }
        }

        location.href = "../student_Dashboard/studentDashboard.html";
    }
})

isUserLogin();
loadQuestions();
