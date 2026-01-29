import { isUserLogin } from "../auth/auth.js";
import { getData, removeData } from "../utils/localStorage.js";
const logoutBtn = document.getElementById("logoutBtn");
const testBtn = document.querySelector("#startTestBtn");
const tableBody = document.querySelector("#tableBody");
logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener("click", () => {
    removeData("user");
    isUserLogin();
});
testBtn === null || testBtn === void 0 ? void 0 : testBtn.addEventListener("click", (e) => {
    location.href = "/QuizApp/HTML pages/quizPage.html";
});
function displayUsers() {
    var _a, _b, _c, _d, _e, _f, _g;
    const users = getData("users");
    if (!users) {
        return;
    }
    for (let i = 0; i < users.length; i++) {
        const tr = document.createElement("tr");
        const sNo = document.createElement("td");
        sNo.textContent = `${i + 1}`;
        const name = document.createElement("td");
        name.textContent = (_b = (_a = users[i]) === null || _a === void 0 ? void 0 : _a.fullName) !== null && _b !== void 0 ? _b : "";
        const email = document.createElement("td");
        email.textContent = (_d = (_c = users[i]) === null || _c === void 0 ? void 0 : _c.email) !== null && _d !== void 0 ? _d : "";
        const totalMarks = document.createElement("td");
        totalMarks.textContent = (_g = String((_f = (_e = users[i]) === null || _e === void 0 ? void 0 : _e.result) === null || _f === void 0 ? void 0 : _f.correct)) !== null && _g !== void 0 ? _g : "Test Not Attempted";
        const btn = document.createElement("button");
        btn.textContent = `report`;
        btn.dataset.index = `${i}`;
        btn.classList.add('reportBtn');
        tr.append(sNo, name, email, totalMarks, btn);
        tableBody.append(tr);
    }
}
tableBody === null || tableBody === void 0 ? void 0 : tableBody.addEventListener("click", (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    e.preventDefault();
    const btn = e.target;
    const index = Number(btn.dataset.index);
    const users = getData("users");
    if (users === undefined || users === null)
        return;
    console.log(users[index]);
    alert(`
        Name : ${(_a = users[index]) === null || _a === void 0 ? void 0 : _a.fullName}

        Question Attempted : ${((_c = (_b = users[index]) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c.numberOfQuestions) - (((_e = (_d = users[index]) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.correct) + ((_g = (_f = users[index]) === null || _f === void 0 ? void 0 : _f.result) === null || _g === void 0 ? void 0 : _g.wrong)) || "test Not Attempted yet"}
        correct : ${(_k = (_j = (_h = users[index]) === null || _h === void 0 ? void 0 : _h.result) === null || _j === void 0 ? void 0 : _j.correct) !== null && _k !== void 0 ? _k : "test Not Attempted yet"}
        wrong : ${(_o = (_m = (_l = users[index]) === null || _l === void 0 ? void 0 : _l.result) === null || _m === void 0 ? void 0 : _m.wrong) !== null && _o !== void 0 ? _o : "test Not Attempted yet"}
        total question : ${(_r = (_q = (_p = users[index]) === null || _p === void 0 ? void 0 : _p.result) === null || _q === void 0 ? void 0 : _q.numberOfQuestions) !== null && _r !== void 0 ? _r : "test Not Attempted yet"}
        
        perecntage : ${(((_t = (_s = users[index]) === null || _s === void 0 ? void 0 : _s.result) === null || _t === void 0 ? void 0 : _t.correct) / ((_v = (_u = users[index]) === null || _u === void 0 ? void 0 : _u.result) === null || _v === void 0 ? void 0 : _v.numberOfQuestions)) * 100 || "test Not Attempted yet"}%
    `);
});
displayUsers();
//# sourceMappingURL=admin.js.map