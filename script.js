async function fetchWeather() {
  const cityName = document.getElementById("cityInput").value;
  const apiKey = window.apiKey; // Use the globally injected API key
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.main && data.main.temp) {
      document.getElementById(
        "weatherData"
      ).innerHTML = `Temperature: ${data.main.temp}°C`;
    } else {
      document.getElementById(
        "weatherData"
      ).innerHTML = `Error: ${data.message}`;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById(
      "weatherData"
    ).innerHTML = `Error fetching weather data.`;
  }
}
