var tasks = [];
document.querySelector("div#newTaskDiv button#addTaskButton").onclick = addTask;
listTasks();

function listTasks() {
    var taskListElement = document.querySelector("div#taskListDiv ul");
    taskListElement.innerHTML = "";
    tasks.forEach(element => {
        var taskElement = document.createElement("li");
        taskElement.appendChild(document.createTextNode(element));
        taskListElement.appendChild(taskElement);
        var deleteTaskButtonElement = document.createElement("button");
        deleteTaskButtonElement.appendChild(document.createTextNode("Delete item"));
        deleteTaskButtonElement.appendChild(document.createTextNode("Delete item"));
        deleteTaskButtonElement.onclick = function () {
            tasks.splice(tasks.indexOf(element + " "), 1);
            listTasks();
        };
        taskElement.appendChild(deleteTaskButtonElement);
    });
}

function addTask() {
    var inputElement = document.querySelector("div#newTaskDiv input");
    tasks.push(inputElement.value + " ");
    inputElement.value = "";
    console.log(tasks);
    listTasks();
}