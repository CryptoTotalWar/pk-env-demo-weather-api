async function fetchWeather() {
  const cityName = document.getElementById("cityInput").value;
  const apiKey = window.apiKey; // Use the globally injected API key
  // Add '&units=metric' to ensure temperature is in Celsius
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.main && data.main.temp) {
      document.getElementById(
        "weatherData"
      ).innerHTML = `Temperature: ${data.main.temp}°C`;
    } else {
      // Improve the error display to provide more specific feedback
      document.getElementById("weatherData").innerHTML = `Error: ${
        data.message || "Weather data not found"
      }`;
    }
  } catch (error) {
    console.error("Error:", error);
    document.getElementById(
      "weatherData"
    ).innerHTML = `Error fetching weather data.`;
  }
}
