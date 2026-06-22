let projects = JSON.parse(localStorage.getItem("projects")) || [];

function addProject() {
  const name = document.getElementById("projectName").value;

  if (!name) return;

  projects.push({
    name,
    tasks: [],
  });

  document.getElementById("projectName").value = "";

  localStorage.setItem("projects", JSON.stringify(projects));
  render();
}

function addTask(index) {
  const task = prompt("Task name:");

  if (!task) return;

  projects[index].tasks.push({
    name: task,
    done: false,
  });

  localStorage.setItem("projects", JSON.stringify(projects));
  render();
}

function toggleTask(pIndex, tIndex) {
  projects[pIndex].tasks[tIndex].done = !projects[pIndex].tasks[tIndex].done;

  localStorage.setItem("projects", JSON.stringify(projects));
  render();
}

function getProgress(project) {
  if (project.tasks.length === 0) return 0;

  let done = project.tasks.filter((t) => t.done).length;

  return Math.round((done / project.tasks.length) * 100);
}

function render() {
  const div = document.getElementById("projects");

  div.innerHTML = "";

  projects.forEach((p, i) => {
    div.innerHTML += `
      <div class="project">
        <h3>${p.name}</h3>

        <p>Progress: ${getProgress(p)}%</p>

        <button onclick="addTask(${i})">Add Task</button>

        ${p.tasks
          .map(
            (t, j) => `
          <div class="task">
            <input type="checkbox" ${t.done ? "checked" : ""}
              onclick="toggleTask(${i}, ${j})">
            ${t.name}
          </div>
        `,
          )
          .join("")}
      </div>
    `;
  });
}

render();
