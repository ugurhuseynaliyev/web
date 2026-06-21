const calendar = document.getElementById("calendar");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar() {
  calendar.innerHTML = "";

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendar.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");

    cell.classList.add("day");
    cell.textContent = day;

    if (
      day === date.getDate() &&
      currentMonth === date.getMonth() &&
      currentYear === date.getFullYear()
    ) {
      cell.classList.add("today");
    }

    const key = `${currentYear}-${currentMonth}-${day}`;

    if (events[key]) {
      events[key].forEach((event) => {
        const p = document.createElement("p");
        p.textContent = event;
        p.classList.add("event");

        cell.appendChild(p);
      });
    }

    cell.onclick = () => addEvent(day);

    calendar.appendChild(cell);
  }
}

let events = {};

function addEvent(day) {
  const text = prompt("Type event: ");

  if (!text) return;

  const key = `${currentYear}-${currentMonth}-${day}`;

  if (!events[key]) {
    events[key] = [];
  }

  events[key].push(text);

  renderCalendar();
}

renderCalendar();
