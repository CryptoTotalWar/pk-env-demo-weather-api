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

1. **Create a text file named "OPEN_WEATHER_MAP_API_KEY.txt"** and insert your API key as its content.
2. Save this file as a secret named `OPEN_WEATHER_MAP_API_KEY` in a local directory outside of your repo.
3. Use the following terminal commands to quickly add your secret in Polykey:

   ```bash
   echo "your_api_key_here" > OPEN_WEATHER_MAP_API_KEY.txt
   ```

4. Create your vault
   ```bash
   polykey vaults create Weather-Ops
   ```
5. Add your secret to the vault

   ```bash
   polykey secrets create ./OPEN_WEATHER_MAP_API_KEY.txt Weather-Ops:OPEN_WEATHER_MAP_API_KEY
   ```

6. Run `npm start` to initiate the project using the Polykey environment management. This utilizes the `polykey secrets env` command detailed in the `package.json` script, which dynamically injects the API key into your environment. Similarly, check `localhost:3000` in your browser and input a city to see the weather data.

## Comparison of Approaches

Note the main differences in configuration between the `traditional-env` and `Polykey` branches, primarily visible in `server.js` and the `package.json` scripts. The `package.json` script in the Polykey branch includes a command that ensures the `polykey secrets env` command runs and completes before starting the server, which is crucial for the proper injection of secrets. Also we do not require .env in the server.js for Polykey, instead we use ...

## Conclusion

This demonstration highlights the pros and cons of using Polykey versus traditional `.env` files. Polykey provides enhanced security through encryption and dynamic injection, which are critical in production environments and sensitive applications. We encourage you to try replacing your `.env` method with Polykey in your projects and share your experiences with us!
