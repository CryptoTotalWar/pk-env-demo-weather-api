# Replacing .env with Polykey

## Introduction

This repository provides a hands-on demonstration of replacing traditional `.env` files with Polykey for managing environment variables in Node.js applications. It includes two branches:

- **traditional-env**: Showcases a simple Node.js project fetching temperatures for any city using the dotenv method.
- **Polykey**: Illustrates replacing dotenv with Polykey for more secure and dynamic environment variable management.
  The main branch contains this README, guiding you through the demonstration and explaining how to replicate these methods in your own Node.js projects.

## Purpose of This Demonstration

The aim is to highlight the advantages of using Polykey over the traditional `.env` approach, emphasizing how Polykey enhances security by encrypting secrets and dynamically injecting them into the application environment, thereby reducing the risks associated with plaintext storage and accidental exposure of sensitive data.

## Getting Started

Clone the repository and explore different implementations:

```bash
git clone https://github.com/CryptoTotalWar/pk-env-demo-weather-api.git
```

Follow the instructions below for each branch to understand how each method manages environment variables.

## Branch Instructions

<!-- make a note here that users need to fetch and pull all the remote repos and install dependancies and checkout to the traditional-env branch to get started -->

### Traditional-env Branch

1. **Create your `.env` file** at the root of the project.
2. Add `OPEN_WEATHER_MAP_API_KEY=` followed by your API Key.
3. Obtain an API key by signing up at [OpenWeatherMap API](https://openweathermap.org/api).
4. Place your API key after `OPEN_WEATHER_MAP_API_KEY=` in your `.env` file.
5. Run `npm start` to launch the project on `localhost:3001`. Input a city like "Miami" in your browser to verify the API's functionality and observe the terminal to see how the API key is served from your `.env` file.

### How `.env` works

In the traditional-env branch, the `.env` file stores sensitive information like API keys in plain text. When `npm start` is executed, the dotenv library loads these variables into `process.env`, making them accessible throughout the application. This method, while mostly secure, poses some common security vulnerabilities such as x, y, z.

### Polykey Branch

**Pre-requisite:**

- Setup Polykey by following the [Polykey Documentation](https://polykey.com/docs/tutorials/polykey-cli/).
- Use the same VaultName "**Weather-Ops**" and secretsName "**OPEN_WEATHER_MAP_API_KEY**" to align with the **package.json** script and **server.js** logic.
  - If you choose to use different names, you'll need to configure the code accordingly.

1. **Create a Temporary Text File:**
   Outside of the repo, create a temporary text file named **"OPEN_WEATHER_MAP_API_KEY.txt"** and add your API key.

   **TIP:** Use the following command to create the file quickly:

   ```bash
   echo "your_api_key_here" > OPEN_WEATHER_MAP_API_KEY.txt
   ```

   **Important Configuration Notes:**

   - I recommend following this demo using the same VaultName "**Weather-Ops**" and secret name "**OPEN_WEATHER_MAP_API_KEY**" but if you choose to use a different vaultName or secretName, ensure you configure the **package.json** and **server.js** accordingly to match these names.

2. **Start Polykey & Create a Vault named "Weather-Ops":**

```bash
polykey vaults create Weather-Ops
```

3. **Add Your API Key as a Secret:**

Convert your environment variable (the text file) into a secret within the vault:

```bash
polykey secrets create ./OPEN_WEATHER_MAP_API_KEY.txt Weather-Ops:OPEN_WEATHER_MAP_API_KEY
```

4. **Start the Project**

Run **`npm start`** to initiate the project. using Polykey's environment management. This leverages the polykey secrets env command from the **`package.json`** script, dynamically injecting the API key into your environment. Visit **`localhost:3000`** in your browser, input a city like "Miami", and verify the API's functionality. Note the terminal output for how the API key is dynamically injected.

## Key Differences Between Branches

- **Traditional-env:** Uses dotenv to load environment variables from `.env` files into `process.env`:

```bash
require('dotenv').config();
const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
```

- **Polykey:** Replaces dotenv with Polykey, which securely injects environment variables directly from encrypted vaults:

```bash
"scripts": {
    "start": "polykey secrets env --env Weather-Ops:OPEN_WEATHER_MAP_API_KEY -- node server.js",
}
```

This script ensures that the polykey secrets env command runs before the server starts, injecting the API key into the environment.

## Educational Insight

### How `.env` works

In the traditional-env branch, the `.env` file stores sensitive information like API keys in plain text. When `npm start` is executed, the dotenv library loads these variables into `process.env`, making them accessible throughout the application. This method, while mostly secure, poses some common security vulnerabilities such as x, y, z.

### How Polykey Works

In the Polykey branch, secrets are not stored locally but securely within Polykey vaults. The `polykey secrets env` command, specified in the `package.json`, retrieves the secrets and injects them directly into the process environment when the application starts. This method ensures that secrets are encrypted at rest, only exposed in memory, and not directly accessible from the filesystem.

## Conclusion

This demonstration has outlined the significant benefits and potential drawbacks of transitioning from traditional `.env` files to Polykey for secure environment variable management in Node.js projects. By enhancing security through encryption and dynamic injection, Polykey proves to be invaluable for sensitive applications in production environments. We encourage you to implement Polykey in your projects, replacing .env methods, and to share your experiences with us!

This demonstration is applicable to typical software projects, especially those developed in Node.js that require dynamic and secure environment management.
