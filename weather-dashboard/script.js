const weatherDataList = [
  {
    city: "Baku",
    country: "Azerbaijan",
    temperature_2m: 28,
    relative_humidity_2m: 60,
    apparent_temperature: 30,
    wind_speed_10m: 12,
  },
  {
    city: "London",
    country: "UK",
    temperature_2m: 18,
    relative_humidity_2m: 70,
    apparent_temperature: 17,
    wind_speed_10m: 8,
  },
  {
    city: "Moscow",
    country: "Russia",
    temperature_2m: 10,
    relative_humidity_2m: 80,
    apparent_temperature: 8,
    wind_speed_10m: 15,
  },
];

function search() {
  const city = document.getElementById("city").value.toLowerCase().trim();

  const found = weatherDataList.find(
    (item) => item.city.toLowerCase() === city,
  );

  if (!found) {
    document.getElementById("result").innerText = "City Not Found!";
    return;
  }

  const temp = found.temperature_2m;

  if (temp >= 25) {
    document.body.style.background = "#ffd54f";
  } else if (temp >= 15) {
    document.body.style.background = "#81d4fa";
  } else {
    document.body.style.background = "#b0bec5";
  }

  document.getElementById("result").innerHTML = `
        <div class="wrapper">
          <h2 class="name">${found.city}, ${found.country}</h2>
          <p class="temp">Temperature: ${found.temperature_2m}°C</p>
          <p class="apparent">Apparent Temperature: ${found.apparent_temperature}°C</p>
          <p class="humidity">Humidity: ${found.relative_humidity_2m}%</p>
          <p class="wind">Wind Speed: ${found.wind_speed_10m} km/saat</p>
        </div>
      `;
}
