# Replacing .env with Polykey in Node.js Projects

## Introduction

This repository demonstrates the transition from using traditional .env files for managing environment variables in Node.js applications to a more secure and robust method using Polykey. You will find three branches here: `main` (using traditional .env), `traditional-env` (structured similar to Polykey branch but still using .env), and `Polykey`.

## Getting Started

To get started with this demonstration, first clone the repository:

```bash
git clone https://github.com/CryptoTotalWar/pk-env-demo-weather-api.git
cd pk-env-demo-weather-api
```

Switch between the different branches to see the implementations and configurations.

### Traditional-env Branch

1. **Setup**:

   - Clone the repository and checkout to the `traditional-env` branch.
   - Create an `.env` file in the root directory.
   - Sign up at [OpenWeatherMap API](https://openweathermap.org/api) to get your API key.
   - Add your API key to the `.env` file as follows:
     ```plaintext
     OPEN_WEATHER_MAP_API_KEY=your_api_key_here
     ```
   - Run `npm install` to install dependencies.

2. **Run the Application**:

   - Execute `npm start` to start the server.
   - Open your web browser and go to `http://localhost:3001`.
   - Type a city name like "Miami" to fetch and display weather data.

3. **Understanding the Traditional .env Method**:
   - The `.env` file stores sensitive API keys and other environment variables in plaintext.
   - The `dotenv` package is used to load these variables into `process.env` in your Node.js application.

### Polykey Branch

1. **Setup**:

   - Checkout to the `Polykey` branch.
   - Create a text file named `OPEN_WEATHER_MAP_API_KEY.txt` and write your OpenWeatherMap API key inside it.
   - Save this key as a secret in Polykey using the following terminal commands:
     ```bash
     echo "your_api_key_here" > OPEN_WEATHER_MAP_API_KEY.txt
     polykey secrets create ./OPEN_WEATHER_MAP_API_KEY.txt Weather-Ops:OPEN_WEATHER_MAP_API_KEY
     ```
   - Run `npm install` if not already done.

2. **Run the Application with Polykey**:

   - Execute `npm start` to start the server using Polykey to inject the API key.
   - Visit `http://localhost:3001` in your browser.
   - Enter any city like "Miami" to check if the weather API fetches data correctly.

3. **Key Differences and Configuration**:
   - In the `server.js`, instead of loading the API key from `.env`, the key is injected directly into the process environment by Polykey.
   - The `package.json` contains a script modified to use `polykey secrets env` to start the server, ensuring the API key is securely injected.

## Conclusion

Using Polykey enhances security by encrypting secrets and only exposing them where necessary, unlike the traditional `.env` method that stores secrets in plaintext. This method minimizes the risk of exposing sensitive data through source control or other means.

### Pros and Cons

- **Pros**:
  - Enhanced security with encrypted storage of secrets.
  - Seamless integration and minimal changes to existing code.
- **Cons**:
  - Requires initial setup of Polykey and understanding of its commands.
  - Dependency on Polykey being correctly configured and running.

### Encouragement for Adoption

We encourage you to try replacing your `.env` usage with Polykey in your projects. Share your experiences and any feedback on this approach in the discussions or issues sections of this repository!
