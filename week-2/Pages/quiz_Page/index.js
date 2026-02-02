const question = document.querySelector(".question");
const optionBtns = document.querySelectorAll(".options button");
const options = document.querySelector(".options");
const answerSheet = JSON.parse(localStorage.getItem("answers")) || [];
let questionsList = JSON.parse(localStorage.getItem("questions")) || loadQuestions();
let currentQuestion = Number(localStorage.getItem("Cquestion")) || 0;
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextbtn");
const prevBtn = document.getElementById("previousBtn");

const questionNumber = document.querySelector(".questionNumber");

function redirectIfLoggedIn(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
        location.href = "../login/login.html";
    }
}

function shuffleQuestions(questionsList){

    for(let i = 0 ; i<questionsList.length ; i++ ){
        let j = (Math.floor(Math.random() * (i+1))) % questionsList.length;
        [ questionsList[i] , questionsList[j] ] = [ questionsList[j] , questionsList[i] ];
    }
}

options?.addEventListener("click",(e)=>{
    e.preventDefault();

    if(e.target.tagName !== "BUTTON")    return;

    optionBtns.forEach( btn => {
        btn.classList.remove("btnActivate");
    });
    answerSheet[currentQuestion] = e.target.textContent;
    localStorage.setItem("answers",JSON.stringify(answerSheet));

    e.target.classList.add("btnActivate");
})


function loadQuestions(){

    fetch("../../data/quiz.json").then(response=>{
        return response.json();
    }).then(result=>{
        localStorage.setItem("questions", JSON.stringify(result));
        localStorage.setItem("Cquestion","0");
        questionsList = result;
        shuffleQuestions(questionsList);
        loadQuestion();
    })
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

    questionNumber.textContent = `${currentQuestion + 1 }/${questionsList.length}`;


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

nextBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    optionBtns?.forEach( btn => {
        btn.classList.remove("btnActivate");
    });

    if(currentQuestion < questionsList.length){
        currentQuestion++;
        loadQuestion();
        localStorage.setItem("answers",JSON.stringify(answerSheet));
    }
})

prevBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    if(currentQuestion>0){
        currentQuestion--;
        loadQuestion();
        localStorage.setItem("answers",JSON.stringify(answerSheet));
    }
})

submitBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    
    if(confirm("Are you sure you want to Submit ?")){
        let correctAnswers = 0;
        let wrongAnswers = 0;

        const answers = JSON.parse(localStorage.getItem("answers"));
        for(let i = 0 ; i < answers?.length ; i++){
            if(answers[i] === questionsList[i].options[questionsList[i].correctAnswerIndex]){
                correctAnswers++;
            }else if( answers[i]!== null ){
                wrongAnswers++;
            }
        }

        localStorage.removeItem("answers");
        localStorage.removeItem("questions");
        localStorage.removeItem("Cquestion");

        const user = JSON.parse(localStorage.getItem("user"));
        user.correct = correctAnswers;
        user.wrong = wrongAnswers;
        user.questionLength = questionsList.length;

        localStorage.setItem("user",JSON.stringify(user));

        const Users = JSON.parse(localStorage.getItem("users")) || [];

        let index = Users?.findIndex( User => User.email === user.email );

        if(index === -1){
            Users.push(user);
        }else{    
            Users[index] = user;
        }
        
        localStorage.setItem("users",JSON.stringify(Users));

        if(user.role === "student"){
            location.href = "../student_Dashboard/studentDashboard.html";
        }else{
            location.href = "../admin_Dashboard/adminDashboard.html";
        }
    }
})

function init(){
    redirectIfLoggedIn();
    loadQuestion();
}

init();
