import type { Question } from "../types/question.js";
import { getData, setData } from "../utils/localStorage.js";

let questions = getData<Question[]>("questions");
const optionBtns = document.querySelectorAll(".options") as NodeListOf<HTMLButtonElement>;
const optionsDiv = document.querySelector(".options") as HTMLElement;
const prevBtn = document.querySelector("#previousBtn") as HTMLButtonElement;
const nextBtn = document.querySelector("#nextBtn") as HTMLButtonElement;
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;
let currentQuesiton = 0;
let answers:string[] = [];

async function fetchQuestions(){

    if(!questions){
        try{
            const response = await fetch("/QuizApp/assets/data/questions.json");
            questions = await response.json() as Question[]; 
            shuffleQuestions();
            setData("questions", questions);
            displayQuestion();
        }catch(error){
            console.log(error);
        }
    }


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

    const target = e.target as HTMLButtonElement;
    optionBtns.forEach( btn=>{
        btn.classList.remove("btnActivate");
    })    

    answers[currentQuesiton] = target.textContent;
    target.classList.add("btnActivate");
    
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

    const question = document.querySelector("question") as HTMLElement;
    if(questions === null){
        alert("something went wrong");
        return;
    }
    question.textContent = questions[currentQuesiton]?.question ?? "";


    for(let i = 0 ; i<optionBtns?.length ;i++){
        const btn = optionBtns[i]
        btn?.classList.remove("btnActivate");
        if(btn) 
            btn.textContent = questions[currentQuesiton]?.options[i] ?? "";

        if(answers.length > currentQuesiton){
            if(answers[currentQuesiton] === btn?.textContent){
                btn?.classList.add("btnActivate");
            }
        }
    }
    setData("currentQuestion",currentQuesiton);
}


prevBtn?.addEventListener("click" ,(e)=>{
    e.preventDefault();
    currentQuesiton--;
    displayQuestion();
})

nextBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    currentQuesiton++;
    displayQuestion();
})


