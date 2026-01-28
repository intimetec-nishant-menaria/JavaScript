import { getData } from "../utils/localStorage.js";
export function isUserLogin() {
    const user = getData("user");
    const currentPath = location.pathname;
    if (!user) {
        if (!(currentPath.endsWith("login.html") || currentPath.endsWith("register.html")))
            location.href = "/QuizApp/HTML Pages/login.html";
    }
    else {
        switch (user.role) {
            case "student": {
                location.href = "/QuizApp/HTML Pages/studentDashBoard.html";
                break;
            }
            case "admin": {
                location.href = "/QuizApp/HTML Pages/adminDashBoard.html";
                break;
            }
        }
    }
}
//# sourceMappingURL=auth.js.map