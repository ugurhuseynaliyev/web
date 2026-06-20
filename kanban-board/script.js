let task_value = document.querySelector(".task-value");

const columns = {
  todo: document.querySelector(".todo .todos"),
  inProgress: document.querySelector(".in-progress .todos"),
  completed: document.querySelector(".completed .todos"),
};

let tasks = [];

function addTask() {
  if (!task_value.value.trim()) return;

  tasks.push({
    id: Date.now(),
    task_value: task_value.value,
    status: "todo",
  });

  task_value.value = "";
  renderTasks();
}

function renderTasks() {
  Object.values(columns).forEach((col) => (col.innerHTML = ""));

  tasks.forEach((task) => {
    const taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.innerText = task.task_value;

    taskEl.draggable = true;
    taskEl.dataset.id = task.id;

    taskEl.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", task.id);
    });

    columns[task.status].appendChild(taskEl);
  });
}

Object.keys(columns).forEach((status) => {
  const col = columns[status];

  col.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  col.addEventListener("drop", (e) => {
    e.preventDefault();

    const id = e.dataTransfer.getData("text/plain");

    const task = tasks.find((t) => t.id == id);
    if (task) {
      task.status = status;
      renderTasks();
    }
  });
});
