# Replacing .env with Polykey

## Introduction

This repository demonstrates the transition from using traditional `.env` files for managing environment variables in Node.js applications to a more secure and robust method using Polykey. This transition is illustrated across three branches:

- **main**: Contains only a README that guides through the repository.
- **traditional-env**: Demonstrates the traditional approach using `.env` files to handle environment variables.
- **Polykey**: Showcases the replacement of the `.env` method with Polykey's `secrets env` method for more secure and dynamic environment variable management.

## Purpose of This Demonstration

The aim of this demonstration is to highlight the advantages of using Polykey for environment variable management over the traditional `.env` file approach. By encrypting secrets and dynamically injecting them into the application environment, Polykey significantly reduces the risks associated with plaintext storage and accidental exposure of sensitive data, making it a superior choice for managing sensitive configurations in production environments.

## Getting Started

Clone this repository to your local machine and open it with your preferred Integrated Development Environment (IDE) such as Visual Studio Code or IntelliJ:

```bash
git clone https://github.com/CryptoTotalWar/pk-env-demo-weather-api.git
```

Explore the different branches to see the distinct imlementations and configurations for each method of managing environment variables.

## Branch Instructions

### Traditional-env Branch

1. **Create your own `.env` file** at the root of the project.
2. Add `OPEN_WEATHER_MAP_API_KEY=` to the file.
3. Sign up at [OpenWeatherMap API](https://openweathermap.org/api) and obtain your API key.
4. Place your API key after `OPEN_WEATHER_MAP_API_KEY=` in your `.env` file.
5. Run `npm start` to launch the project on `localhost:3001`. Open your browser and input a city like "Miami" to see that the API is operational, displaying weather data. Additionally, check your terminal to observe how the API key is served from your `.env` file.

### Polykey Branch

This branch requires prior setup (installation & bootstrapping) of Polykey. For setup instructions, visit theThe following requires prior setup (installation & bootstrapping) of Polykey. For guidance on setting up Polykey, refer to the [Polykey Documentation](https://polykey.com/docs/tutorials/polykey-cli/).

1. **Create a Temporary Text File:**
   Outside of the repo, create a temporary text file named **"OPEN_WEATHER_MAP_API_KEY.txt"** on your local directory, and add your API key.

   **TIP:** Quick command to create the text file:

   ```bash
   echo "your_api_key_here" > OPEN_WEATHER_MAP_API_KEY.txt
   ```

   **Important Configuration Notes:**

   - I recommend following this demo using the same VaultName "**Weather-Ops**" and secret name "**OPEN_WEATHER_MAP_API_KEY**" but if you choose to use a different VaultName or secret name, ensure you configure the **package.json** and **server.js** accordingly to match these names.

2. **Create a Vault:**

After starting your Polykey agent, create a vault named "Weather-Ops":

```bash
polykey vaults create Weather-Ops
```

3. **Add Your Environment Variable as a Secret:**

Convert your environment variable into a secret within the vault:

```bash
polykey secrets create ./OPEN_WEATHER_MAP_API_KEY.txt Weather-Ops:OPEN_WEATHER_MAP_API_KEY
```

4. **Start the Project**

Run **`npm start`** to initiate the project. using Polykey's environment management. This leverages the polykey secrets env command from the **`package.json`** script, dynamically injecting the API key into your environment. Visit **`localhost:3000`** in your browser, input a city like "Miami", and verify the API's functionality. Note the terminal output for how the API key is dynamically injected.

## CEducational Insight

The **`server.js`** script and **`package.json`** within the Polykey branch are configured as follows to replace .env:

```bash
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
```

```bash
"scripts": {
    "start": "polykey secrets env --env Weather-Ops:OPEN_WEATHER_MAP_API_KEY -- node server.js",
}
```

This setup ensures that the `polykey secrets env` command is executed before the Node.js server starts, securely injecting environment variables directly from Polykey into the application runtime.

## Conclusion

This demonstration has outlined the significant benefits and potential drawbacks of transitioning from traditional `.env` files to Polykey for secure environment variable management in Node.js projects. By enhancing security through encryption and dynamic injection, Polykey proves to be invaluable for sensitive applications in production environments. We encourage you to implement Polykey in your projects, replacing .env methods, and to share your experiences with us!

This demonstration is applicable to typical software projects, especially those developed in Node.js that require dynamic and secure environment management.
