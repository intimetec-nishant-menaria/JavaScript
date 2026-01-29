import { isUserLogin } from "../auth/auth.js";
import { getData, removeData } from "../utils/localStorage.js";
const logoutBtn = document.getElementById("logoutBtn");
const quizBtn = document.getElementById("quizBtn");
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", () => {
    removeData("user");
    isUserLogin();
});
quizBtn === null || quizBtn === void 0 ? void 0 : quizBtn.addEventListener("click", () => {
    if (!confirm("Are you sure you want to start the test?")) {
        return;
    }
    location.href = "/QuizApp/HTML Pages/quizPage.html";
});
function displayResult() {
    var _a, _b, _c, _d, _e, _f;
    const user = getData("user");
    if (!user) {
        isUserLogin();
        return;
    }
    const notAttempted = document.querySelector("#questionsNotAttempted");
    const correct = document.querySelector("#correctlyAttempted");
    const wrong = document.querySelector('#wrongAttempted');
    const totalMarks = document.querySelector("#totalMarks");
    notAttempted.textContent = (user === null || user === void 0 ? void 0 : user.result) ? `${((_a = user.result) === null || _a === void 0 ? void 0 : _a.numberOfQuestions) - ((_b = user.result) === null || _b === void 0 ? void 0 : _b.correct) - ((_c = user === null || user === void 0 ? void 0 : user.result) === null || _c === void 0 ? void 0 : _c.wrong)} ` : "Test Not Attempted Yet";
    correct.textContent = (user === null || user === void 0 ? void 0 : user.result) ? `${(_d = user === null || user === void 0 ? void 0 : user.result) === null || _d === void 0 ? void 0 : _d.correct}` : "Test Not Attempted Yet";
    wrong.textContent = (user === null || user === void 0 ? void 0 : user.result) ? `${(_e = user === null || user === void 0 ? void 0 : user.result) === null || _e === void 0 ? void 0 : _e.wrong}` : "Test Not Attempted Yet";
    totalMarks.textContent = (user === null || user === void 0 ? void 0 : user.result) ? `${(_f = user === null || user === void 0 ? void 0 : user.result) === null || _f === void 0 ? void 0 : _f.correct}` : "Test Not Attempted Yet";
}
displayResult();
//# sourceMappingURL=student.js.map