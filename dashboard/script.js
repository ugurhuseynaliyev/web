let date_time = document.querySelector(".date-time");

function updateDateTime() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  date_time.innerHTML = `
        <div class="time">
            ${hours}:${minutes}
        </div>
        <div class="date">
            ${day}.${month}.${year}
        </div>
    `;
}

updateDateTime();
setInterval(updateDateTime, 1000);

async function getWeatherInfo() {
  const geoRes = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=Baku",
  );

  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    document.querySelector(".weather").innerHTML = "Şəhər tapılmadı";
    return;
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m`,
  );

  const weatherData = await weatherRes.json();
  const c = weatherData.current;
  const temp = c.temperature_2m;

  if (temp >= 25) {
    document.body.style.background = "#ffd54f";
  } else if (temp >= 15) {
    document.body.style.background = "#81d4fa";
  } else {
    document.body.style.background = "#b0bec5";
  }

  document.querySelector(".weather").innerHTML = `
        <div class="wrapper">
          <h2 class="name">${name}, ${country}</h2>
          <p class="temp">Temperature: ${c.temperature_2m}°C</p>
          <p class="apparent">Apparent Temperature: ${c.apparent_temperature}°C</p>
          <p class="humidity">Humidity: ${c.relative_humidity_2m}%</p>
          <p class="wind">Wind Speed: ${c.wind_speed_10m} km/saat</p>
        </div>
      `;
}

getWeatherInfo();

let tasksContainer = document.querySelector(".tasks-container");
let taskValue = document.querySelector(".taskValue");

let tasks = [];

function addTask() {
  if (!taskValue.value.trim()) return;
  
  tasks.push({
    id: Date.now(),
    taskValue: taskValue.value,
  });

  taskValue.value = "";

  renderTasks();
}

function renderTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskHtml = `
        <div class="task">
            <p>${task.taskValue}</p>
            <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;

    tasksContainer.innerHTML += taskHtml;
  });
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id != id);
  renderTasks();
}
