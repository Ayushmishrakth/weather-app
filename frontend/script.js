async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(`http://localhost:4000/api/weather/current?city=${city}`);
    const data = await response.json();

    if (data.error) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
    } else {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temp: ${data.main.temp}°C</p>
        <p>🌥 Weather: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    }
  } catch (err) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<p style="color:red;">Failed to fetch weather</p>`;
  }
}
