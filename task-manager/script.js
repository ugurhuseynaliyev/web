let tasks_container = document.querySelector(".tasks-container");
let input = document.querySelector("input");
let filter = document.querySelector("#filter");

let tasks = [];

function addTask() {
  tasks.push({ id: Date.now(), title: input.value, completed: false });
  input.value = "";
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id != id);
  renderTasks();
}

function renderTasks() {
  tasks_container.innerHTML = "";

  let filteredTasks = tasks;

  if (filter.value == "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter.value == "ongoing") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  filteredTasks.forEach((task) => {
    const taskHtml = `
        <div class="task">
          <div class="left">
            <input type="checkbox"
            ${task.completed ? "checked" : ""}
            onchange="toggleTask(${task.id})"
            />
            <p>${task.title}</p>
          </div>
          <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;
    tasks_container.innerHTML = taskHtml + tasks_container.innerHTML;
  });
}

filter.addEventListener("change", renderTasks);

function toggleTask(id) {
  const task = tasks.find((task) => task.id == id);

  if (task) {
    task.completed = !task.completed;
  }

  renderTasks();
}
