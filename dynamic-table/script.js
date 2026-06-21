let users = [];

function addRow() {
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const city = document.getElementById("city").value;

  if (!name || !age || !city) return;

  users.push({
    id: Date.now(),
    name,
    age,
    city,
  });

  renderTable();
}

function renderTable() {
  const tbody = document.getElementById("tbody");

  tbody.innerHTML = "";

  users.forEach((user) => {
    tbody.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>

            <td>
                <button onclick="editRow(${user.id})">Edit</button>
                <button onclick="deleteRow(${user.id})">Delete</button>
            </td>
        </tr>
    `;
  });
}

function deleteRow(id) {
  users = users.filter((user) => user.id !== id);

  renderTable();
}

function editRow(id) {
  const user = users.find((u) => u.id === id);

  user.name = prompt("Name", user.name) || user.name;

  user.age = prompt("Age", user.age) || user.age;

  user.city = prompt("City", user.city) || user.city;

  renderTable();
}

function sortBy(column) {
  users.sort((a, b) => {
    if (a[column] > b[column]) return 1;
    if (a[column] < b[column]) return -1;
    return 0;
  });

  renderTable();
}
