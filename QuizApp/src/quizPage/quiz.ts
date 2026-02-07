import { ensureUserLoggedIn } from "../auth/auth.js";
import type { answer, Question } from "../types/question.js";
import type { User } from "../types/user.js";
import { getData, removeData, setData } from "../utils/localStorage.js";

let questions = getData<Question[]>("questions");
const optionBtns = document.querySelectorAll<HTMLButtonElement>(".options button");
const optionsDiv = document.querySelector(".options") as HTMLElement;
const prevBtn = document.querySelector("#previousBtn") as HTMLButtonElement;
const nextBtn = document.querySelector("#nextbtn") as HTMLButtonElement;
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;
let currentQuesiton = getData<number>("currentQuestion") ?? 0;
let answers: answer[] = getData<answer[]>("answers") ?? [];

async function fetchQuestions(){

    if(!questions){
        // const response = await fetch("/QuizApp/assets/data/questions.json");
        // questions = await response.json() as Question[]; 
        // shuffleQuestions();
        // setData("questions", questions);
        await fetch("../../assets/data/questions.json").then(responce=>{
            return responce.json();
        }).then(result=>{
            questions = result;
            shuffleQuestions();
            setData("questions",questions);
        }).catch(error=>{
            console.log(error);
        })
    }
    displayQuestion();
}
fetchQuestions();

function shuffleQuestions(){

    if(!questions)
        return;

    console.log("inside shuffle");
    for(let  i = 0 ; i < questions?.length ; i++){
        let j = Math.floor( ( Math.random() + i + 1 ) % questions.length );
        [ questions[i]! , questions[j]! ] = [questions[j]! , questions[i]!];
    }
}

optionsDiv?.addEventListener("click",(e)=>{
    e.preventDefault();

    const Target = e.target as HTMLButtonElement;
    if(Target.tagName !== "BUTTON"){
        return;
    }
    optionBtns.forEach( btn=>{
        btn.classList.remove("btnActivate");
    })    

    const newAnswerObj : answer= {
        questionIndex : currentQuesiton,
        userAnswerIndex : Number(Target.dataset.option)
    }
    answers.push(newAnswerObj)
    setData<answer[]>( "answers" , answers );
    Target.classList.add("btnActivate");
    
})

function displayQuestion(){

    if(currentQuesiton === 0){
        prevBtn.disabled = true;
    }else{
        prevBtn.disabled = false;
    }

    if(!questions){
        alert("No questions");
        return;
    }

    if(currentQuesiton === questions?.length - 1){
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }else{
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }

    const questionNumber = document.querySelector(".questionNumber") as HTMLElement;
    questionNumber.textContent = `${currentQuesiton + 1} / ${questions?.length}`;

    const question = document.querySelector(".question") as HTMLElement;
    if(questions === null){
        alert("something went wrong");
        return;
    }
    question.textContent = questions[currentQuesiton]?.question ?? "";

    for(let i = 0 ; i<optionBtns?.length ;i++){
        const btn = optionBtns[i]
        btn?.classList.remove("btnActivate");
        if(btn){
            btn.textContent = questions[currentQuesiton]?.options[i] ?? "";
        }

        if(answers.length > currentQuesiton){
            if(answers[currentQuesiton] === questions[currentQuesiton]?.options[i]){
                btn?.classList.add("btnActivate");
            }
        }
    }
    setData("currentQuestion",currentQuesiton);
}


prevBtn?.addEventListener("click" ,(e)=>{
    e.preventDefault();
    if(currentQuesiton>0){
        currentQuesiton--;
        displayQuestion();
    }
})

nextBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!questions)
        return;
    if(currentQuesiton < questions?.length){
        currentQuesiton++;
        displayQuestion();
    }
})


submitBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!confirm("you want to submit your test ?")){
        return;
    }

    if(!questions){
        alert("somthing went wrong in submit");
        return;
    }

    let correct = 0;
    let wrong = 0;
    for(let i = 0 ; i< answers?.length ; i++){
        if(answers[i]?.userAnswerIndex === questions[i]?.correctAnswerIndex){
            correct++;
        }else{
            wrong++;
        }
    }

    const user = getData<User>("user");
    if(!user){
        ensureUserLoggedIn();
        return;
    }

    user.result = {
        correct : correct,
        wrong : wrong,
        numberOfQuestions : questions.length
    }

    const Users = getData<User[]>("users");
    if(!Users)
        return;

    for(let i = 0 ; i < Users?.length ; i++ ){
        if(Users[i]?.email === user.email){
            Users[i] = user;
            break;
        }
    }

    setData<User[]>("users",Users);
    setData<User>("user",user);
    removeData("questions");
    removeData("currentQuestion");
    removeData("answers");
    
    if(user.role === "student"){
        location.href = "../../HTML_Pages/studentDashBoard.html"
    }else{
        location.href = "../../HTML_Pages/adminDashBoard.html"
    }
})


