import { isUserLogin } from "../auth/auth.js";
import { removeData } from "../utils/localStorage.js";
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
//# sourceMappingURL=student.js.map