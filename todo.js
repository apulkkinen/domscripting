let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
    let task = taskInput.value.trim();
    if (task.length < 2) {
        alert("Kenttä vaatii vähintään kaksi kirjainta");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = task;
    li.onclick = function () {
        this.classList.toggle("completed");
    };
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
        this.parentElement.remove();
    };
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
}
