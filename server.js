const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

// Route that handles the root URL
app.get("/", (req, res) => {
  // Directly define the HTML content with the API key dynamically injected
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY || "placeholder-api-key";
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Weather Demo</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <input type="text" id="cityInput" placeholder="Enter City Name" />
    <button onclick="fetchWeather()">Get Weather</button>
    <div id="weatherData"></div>

    <script>
      window.apiKey = "${apiKey}";
    </script>
    <script src="script.js"></script>
</body>
</html>
    `;

  console.log(`API Key being sent: ${apiKey}`); // This logs the API key being used for debugging purposes
  res.send(htmlContent); // Send the dynamically created HTML content to the client
});

// Serve static files like CSS and JavaScript
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
