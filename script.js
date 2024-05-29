async function fetchWeather() {
  const cityName = document.getElementById("cityInput").value;
  const apiKey = window.apiKey; // Use the globally injected API key
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById(
      "weatherData"
    ).innerHTML = `Temperature: ${data.main.temp}°C`;
  } catch (error) {
    console.error("Error:", error);
  }
}
