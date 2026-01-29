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
    if (!password.trim()) {
        alert("passwords is required");
        return;
    }
    const Users = getData("users");
    if (Users) {
        for (let user of Users) {
            if (user.email === email) {
                if (user.password === password) {
                    setData("user", user);
                    isUserLogin();
                    return;
                }
            }
        }
    }
    fetch("/QuizApp/assets/data/users.json").then(response => {
        return response.json();
    }).then((admins) => {
        for (let admin of admins) {
            if (admin.email === email) {
                if (admin.password === password) {
                    setData("user", admin);
                    isUserLogin();
                    return;
                }
                else {
                    alert("Invalid email or password");
                    return;
                }
            }
        }
    });
});
//# sourceMappingURL=login.js.map