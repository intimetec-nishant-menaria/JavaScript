var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData, setData } from "../utils/localStorage.js";
let questions = getData("questions");
const optionBtns = document.querySelectorAll(".options");
const optionsDiv = document.querySelector(".options");
const prevBtn = document.querySelector("#previousBtn");
const nextBtn = document.querySelector("#nextBtn");
const submitBtn = document.querySelector("#submitBtn");
let currentQuesiton = 0;
let answers = [];
function fetchQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!questions) {
            try {
                const response = yield fetch("/QuizApp/assets/data/questions.json");
                questions = (yield response.json());
                shuffleQuestions();
                setData("questions", questions);
                displayQuestion();
            }
            catch (error) {
                console.log(error);
            }
        }
    });
}
fetchQuestions();
function shuffleQuestions() {
    if (!questions)
        return;
    console.log("inside shuffle");
    for (let i = 0; i < (questions === null || questions === void 0 ? void 0 : questions.length); i++) {
        let j = Math.floor((Math.random() + i + 1) % questions.length);
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
optionsDiv === null || optionsDiv === void 0 ? void 0 : optionsDiv.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    optionBtns.forEach(btn => {
        btn.classList.remove("btnActivate");
    });
    answers[currentQuesiton] = target.textContent;
    target.classList.add("btnActivate");
});
function displayQuestion() {
    var _a, _b, _c, _d;
    if (currentQuesiton === 0) {
        prevBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
    }
    if (!questions) {
        alert("No questions");
        return;
    }
    if (currentQuesiton === (questions === null || questions === void 0 ? void 0 : questions.length) - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }
    else {
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }
    const questionNumber = document.querySelector(".questionNumber");
    questionNumber.textContent = `${currentQuesiton + 1} / ${questions === null || questions === void 0 ? void 0 : questions.length}`;
    const question = document.querySelector("question");
    if (questions === null) {
        alert("something went wrong");
        return;
    }
    question.textContent = (_b = (_a = questions[currentQuesiton]) === null || _a === void 0 ? void 0 : _a.question) !== null && _b !== void 0 ? _b : "";
    for (let i = 0; i < (optionBtns === null || optionBtns === void 0 ? void 0 : optionBtns.length); i++) {
        const btn = optionBtns[i];
        btn === null || btn === void 0 ? void 0 : btn.classList.remove("btnActivate");
        if (btn)
            btn.textContent = (_d = (_c = questions[currentQuesiton]) === null || _c === void 0 ? void 0 : _c.options[i]) !== null && _d !== void 0 ? _d : "";
        if (answers.length > currentQuesiton) {
            if (answers[currentQuesiton] === (btn === null || btn === void 0 ? void 0 : btn.textContent)) {
                btn === null || btn === void 0 ? void 0 : btn.classList.add("btnActivate");
            }
        }
    }
    setData("currentQuestion", currentQuesiton);
}
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentQuesiton--;
    displayQuestion();
});
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentQuesiton++;
    displayQuestion();
});
//# sourceMappingURL=quiz.js.map