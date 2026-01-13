
const button = document.getElementById('addBtn');
const inputBox = document.getElementById('inputArea');
const toDoDiv = document.getElementById('toDoDiv');
const delBtn = document.getElementById('delBtn');

let counter = 0;

button?.addEventListener('click', ()=>{
    const value = inputBox.value;
    if(value === "")
            return;


    const newElement = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const contentDiv = document.createElement('div');

    contentDiv.classList.add('contentDiv');

    deleteBtn.textContent = "delete";
    deleteBtn.id = 'delBtn';
    deleteBtn.addEventListener('click',deleteButton);
    contentDiv.textContent=value;

    newElement.append(contentDiv);
    newElement.append(deleteBtn);

    newElement.id = `divElement${counter++}`;
    newElement.classList.add('toDoDivChild');

    toDoDiv.append(newElement);
    inputBox.value="";
})

function deleteButton(e){
    const parentID = e.target.parentElement.id;
    document.getElementById(parentID)?.remove();
}


