let items = [];

const explorer = document.getElementById("explorer");

function render() {
  explorer.innerHTML = "";

  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <span>
            ${getIcon(item.type)}
            ${item.name}
        </span>

        <div class="actions">
            <button onclick="renameItem(${item.id})">
                Rename
            </button>

            <button onclick="deleteItem(${item.id})">
                Delete
            </button>
        </div>
    `;
    explorer.appendChild(div);
  });
}

document.getElementById("createFolder").addEventListener("click", () => {
  const name = prompt("Folder name: ");

  if (!name) return;

  items.push({
    id: Date.now(),
    name,
    type: "folder",
  });

  render();
});

document.getElementById("createFile").addEventListener("click", () => {
  const name = prompt("File name: ");

  if (!name) return;

  items.push({
    id: Date.now(),
    name,
    type: "file",
  });

  render();
});

function renameItem(id) {
  const item = items.find((i) => i.id === id);

  const newName = prompt("New name: ", item.name);

  if (!newName) return;

  item.name = newName;

  render();
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);

  render();
}

function getIcon(type) {
  switch (type) {
    case "folder":
      return `<i class="fa-solid fa-folder"></i>`;
    case "file":
      return `<i class="fa-regular fa-file"></i>`;
    default:
      return `<i class="fa-solid fa-box"></i>`;
  }
}
