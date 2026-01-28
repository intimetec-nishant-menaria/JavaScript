import { getData, setData } from "../utils/localStorage.js";
import { isUserLogin } from "./auth.js";
const Users = getData("Users") || [];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
isUserLogin();
const redirectToLogin = document.querySelector("#redirectToLogin");
const registerBtn = document.querySelector("#registerBtn");
redirectToLogin === null || redirectToLogin === void 0 ? void 0 : redirectToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "/QuizApp/HTML Pages/login.html";
});
registerBtn === null || registerBtn === void 0 ? void 0 : registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    if (firstName.trim() === "" || lastName.trim() === "") {
        alert("firstName and lastName is required");
        return;
    }
    const email = document.getElementById("email").value;
    if (!emailRegex.test(email)) {
        alert("Enter a valid email");
        return;
    }
    const password = document.getElementById("password").value;
    if (!passwordRegex.test(password)) {
        alert(`Please enter valid password
            Rules:
                1) At least 8 characters
                2) At least 1 lowercase
                3) At least 1 uppercase
                4) At least 1 number
                5) At least 1 special character`);
        return;
    }
    for (let user of Users) {
        if (user.email === email) {
            alert(`${email} is already registered`);
            return;
        }
    }
    const newUser = {
        fullName: `${firstName} ${lastName}`,
        email: email,
        password: password,
        role: "student"
    };
    Users.push(newUser);
    setData("users", Users);
});
//# sourceMappingURL=register.js.map