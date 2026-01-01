const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    // Create li
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = input.value;

    // Toggle completed
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
}