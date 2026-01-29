import { isUserLogin } from "../auth/auth.js";
import { removeData } from "../utils/localStorage.js";
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", () => {
    removeData("user");
    isUserLogin();
});
//# sourceMappingURL=admin.js.map