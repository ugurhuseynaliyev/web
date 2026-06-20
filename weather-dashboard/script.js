async function search() {
  const city = document.getElementById("city").value;

  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
  );
  const geoData = await geoRes.json();

  if (!geoData.results) {
    document.getElementById("result").innerText = "City Not Found!";
    return;
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`,
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

  document.getElementById("result").innerHTML = `
        <div class="wrapper">
          <h2 class="name">${name}, ${country}</h2>
          <p class="temp">Temperature: ${c.temperature_2m}°C</p>
          <p class="apparent">Apparent Temperature: ${c.apparent_temperature}°C</p>
          <p class="humidity">Humidity: ${c.relative_humidity_2m}%</p>
          <p class="wind">Wind Speed: ${c.wind_speed_10m} km/saat</p>
        </div>
      `;
}
