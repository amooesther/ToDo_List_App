function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span onclick="toggleComplete(this)">${taskInput.value}</span>
            <button class="remove-button" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function toggleComplete(taskSpan) {
  
    taskSpan.parentNode.classList.toggle("completed");
}


function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}