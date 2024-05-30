# Replacing .env with Polykey

## Introduction

This repository provides a practical demonstration of transitioning from using traditional `.env` files for managing environment variables in Node.js applications to a more secure and robust method using Polykey. This is illustrated across three branches:

- **main**: Contains only a README that guides through the repository.
- **traditional-env**: Demonstrates the traditional approach using `.env` files to handle environment variables.
- **Polykey**: Showcases the replacement of the `.env` method with Polykey's `secrets env` method for a more secure and dynamic environment variable management.

## Purpose of This Demonstration

The purpose of this demonstration is to illustrate the benefits of using Polykey for environment variable management over the traditional `.env` file approach. Polykey enhances security by encrypting secrets and dynamically injecting them into the application environment, thereby reducing the risks associated with plaintext storage and accidental exposure of sensitive data.

## Getting Started

To get started, clone this repository using the command below and open it with your preferred IDE (e.g., Visual Studio Code, IntelliJ):

```bash
git clone https://github.com/CryptoTotalWar/pk-env-demo-weather-api.git
```

Switch between the different branches to explore the implementations and configurations specific to each method of managing environment variables.

## Branch Instructions

### Traditional-env Branch

1. **Create your own `.env` file** at the root of the project.
2. Add `OPEN_WEATHER_MAP_API_KEY=` to the file.
3. Sign up at [OpenWeatherMap API](https://openweathermap.org/api) and obtain your API key.
4. Place your API key after `OPEN_WEATHER_MAP_API_KEY=` in your `.env` file.
5. Run `npm start` to launch the project on `localhost:3001`. Open your browser, input a city like "Miami" in the application to see that the API is working and displaying weather data. Additionally, observe in your terminal how the API key is served from your `.env` file.

### Polykey Branch

**Note:** The following requires prior setup (installation & bootstrapping) of Polykey. For guidance on setting up Polykey, refer to the [Polykey Documentation](https://polykey.com/docs/tutorials/polykey-cli/).

1. **Create a Temporary Text File:**
   Somewhere on your local directory of your machine, outside of the repo, create a temporary text file named **"OPEN_WEATHER_MAP_API_KEY.txt"** and insert the value of your API key into the file.

   **TIP:** Use the following terminal commands to quickly create the text file:

   ```bash
   echo "your_api_key_here" > OPEN_WEATHER_MAP_API_KEY.txt
   ```

   **Important Configuration Notes:**

   - If you're following this demo, you must use the same VaultName "**Weather-Ops**" and secret name "**OPEN_WEATHER_MAP_API_KEY**".
   - If you choose to use a different VaultName or secret name, ensure you configure the **package.json** and **server.js** scripts accordingly to match these names.

2. **Create a Vault:**

First, create a vault named "Weather-Ops" to hold your secret. This should be done after starting your Polykey agent:

```bash
polykey vaults create Weather-Ops
```

3. **Add Your Environment Variable as a Secret:**

Add your environment variable to the vault, making it a secret:

```bash
polykey secrets create ./OPEN_WEATHER_MAP_API_KEY.txt Weather-Ops:OPEN_WEATHER_MAP_API_KEY
```

4. **Start the Project**

Run **`npm start`** to initiate the project using Polykey's environment management. This command, detailed in the **`package.json`** script, dynamically injects the API key into your environment. Open your browser and navigate to **`localhost:3000`**. Input a city, such as "Miami", to verify that the API is functioning. Observe the terminal output from your **`npm start`** command to see the API key being utilized.

## Comparison of Approaches

Notice that we are not using .env anymore, yet the environment variables are working properly as shown by the functioning API.

This is because the package.json script is configured to run the polykey secrets env command, injecting the api key into local dev environment, and then running the application in development which is searching the process.env

This showcases how Polykey can securely manage and inject environment variables into your applications.

after the polykey command injects the secret with the api key into your environment for the terminal session you did npm start with, which loads the env into the application at runtime.

## Conclusion

This demonstration highlights the pros and cons of using Polykey versus traditional `.env` files. Polykey provides enhanced security through encryption and dynamic injection, which are critical in production environments and sensitive applications. We encourage you to try replacing your `.env` method with Polykey in your projects and share your experiences with us!
