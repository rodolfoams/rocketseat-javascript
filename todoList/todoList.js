var tasks = JSON.parse(localStorage.getItem("todo_list")) || [];
var taskListElement = document.querySelector("div#taskListDiv ul");
document.querySelector("div#newTaskDiv button#addTaskButton").onclick = addTask;
listTasks();

function listTasks() {
    taskListElement.innerHTML = "";
    for (task of tasks) {
        var taskElement = document.createElement("li");
        taskElement.appendChild(document.createTextNode(task));
        taskListElement.appendChild(taskElement);
        var deleteTaskButtonElement = document.createElement("button");
        deleteTaskButtonElement.appendChild(document.createTextNode("Delete item"));
        task_idx = tasks.indexOf(task);
        deleteTaskButtonElement.setAttribute("onclick", "deleteTask(" + task_idx + ")");
        taskElement.appendChild(deleteTaskButtonElement);
    }
}

function addTask() {
    var inputElement = document.querySelector("div#newTaskDiv input");
    tasks.push(inputElement.value + " ");
    inputElement.value = "";
    listTasks();
    saveToStorage();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    listTasks();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem("todo_list", JSON.stringify(tasks));
}