import { getData, setData } from "../utils/localStorage.js";
import { isUserLogin } from "./auth.js";
isUserLogin();
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const redirectToRegister = document.querySelector("#RegisterBtn");
const loginBtn = document.getElementById("loginBtn");
redirectToRegister === null || redirectToRegister === void 0 ? void 0 : redirectToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/QuizApp/HTML Pages/register.html";
});
loginBtn === null || loginBtn === void 0 ? void 0 : loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        alert("Enter a valid email");
        return;
    }
    const password = document.getElementById("password").value;
    const Users = getData("users");
    if (Users === null) {
        alert("something went wrong");
        return;
    }
    for (let user of Users) {
        if (user.email === email) {
            if (user.password === password) {
                setData("user", user);
                isUserLogin();
                return;
            }
        }
    }
    alert(`No user registered with given Email`);
});
//# sourceMappingURL=login.js.map