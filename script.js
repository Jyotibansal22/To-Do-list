let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  taskList.push({ text, completed: false });
  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  taskList[index].completed = !taskList[index].completed;
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

window.onload = renderTasks;
