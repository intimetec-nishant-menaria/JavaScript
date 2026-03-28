import { ensureUserLoggedIn } from "../auth/auth.js";
import type { User } from "../types/user.js";
import { getData, removeData } from "../utils/localStorage.js";

const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;
const testBtn = document.querySelector("#startTestBtn") as HTMLElement;
const tableBody = document.querySelector("#tableBody") as HTMLElement;

logoutBtn?.addEventListener("click",()=>{
    removeData("user");
    location.replace("../../HTML_Pages/login.html");
})

testBtn?.addEventListener("click" , (e)=>{
    location.href = "../../HTML_Pages/quizPage.html";
})

function displayUsers(){

    const users = getData<User[]>("users");

    if(!users){
        return;
    }
    
    for(let i = 0 ; i < users.length ; i++){

        const tr = document.createElement("tr") as HTMLElement;

        const sNo = document.createElement("td") as HTMLElement;
        sNo.textContent = `${i+1}`;

        const name = document.createElement("td") as HTMLElement;
        name.textContent = users[i]?.fullName ?? "";

        const email = document.createElement("td") as HTMLElement;
        email.textContent = users[i]?.email ?? "";

        const totalMarks = document.createElement("td") as HTMLElement;
        console.log(users[i]?.result?.correct);
        totalMarks.textContent = users[i]?.result?.correct === undefined ? "Test Not Attempted" : String(users[i]?.result?.correct) ;

        const btn = document.createElement("button") as HTMLButtonElement;
        btn.textContent = `report`;
        btn.dataset.email = `${users[i]?.email}`;
        btn.classList.add('reportBtn');

        tr.append(sNo,name,email,totalMarks,btn);
        tableBody.append(tr);
    }
}

tableBody?.addEventListener("click",(e)=>{
    e.preventDefault();

    const btn = e.target as HTMLButtonElement;

    if(btn.tagName !== "BUTTON"){
        return;
    }

    const users = getData<User[]>("users");

    if(users===undefined || users===null)
        return;

    const index = users.findIndex(user=> user.email===btn.dataset.email);
     alert(`
        Name : ${users[index]?.fullName}

        Question Unattempted : ${users[index]?.result?.numberOfQuestions! - (users[index]?.result?.correct! + users[index]?.result?.wrong! ) || "test Not Attempted yet"}
        correct : ${users[index]?.result?.correct ?? "test Not Attempted yet"}
        wrong : ${users[index]?.result?.wrong ?? "test Not Attempted yet"}
        total question : ${users[index]?.result?.numberOfQuestions ?? "test Not Attempted yet"}
        
        perecntage : ${ (users[index]?.result?.correct! / users[index]?.result?.numberOfQuestions! ) * 100 || "test Not Attempted yet"}%
    `)
})

displayUsers();