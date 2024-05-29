const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  if (!apiKey) {
    console.error("API key not set in environment variables");
    res.status(500).send("Server configuration error");
    return;
  }

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
      window.apiKey = ${JSON.stringify(apiKey)};
    </script>
    <script src="script.js"></script>
</body>
</html>
  `;
  console.log(`API Key being sent: ${apiKey}`);
  res.send(htmlContent);
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
