# Replacing .env with Polykey

## Introduction

This repository provides a hands-on demonstration of replacing traditional `.env` files with Polykey for managing environment variables in Node.js applications. It features two branches:

- **traditional-env**: Demonstrates a simple Node.js project fetching temperatures for any city using the dotenv method.
- **Polykey**: Illustrates the replacement of dotenv with Polykey, enhancing security and dynamic environment variable management.

## Purpose of This Demonstration

The aim of this demonstration is to showcase the benefits of using Polykey over traditional `.env` files. Polykey enhances security by encrypting secrets and dynamically injecting them into the application environment, mitigating risks associated with plaintext storage and accidental data exposure. This demonstration also highlights configuration differences necessary for transitioning from dotenv to Polykey in Node.js projects.

## Getting Started

Clone the repository and explore different implementations:

```bash
git clone https://github.com/CryptoTotalWar/pk-env-demo-weather-api.git
```

Ensure to fetch all remote branches, pull them, and install dependencies. Begin by checking out the traditional-env branch.

## Branch Instructions

### Traditional-env Branch

1. **Create your `.env` file** at the root of the project.
2. Add `OPEN_WEATHER_MAP_API_KEY=` followed by your API Key.
3. Obtain an API key by signing up at [OpenWeatherMap API](https://openweathermap.org/api).
4. Insert your API key after `OPEN_WEATHER_MAP_API_KEY=` in your `.env` file.
5. Run npm start to launch the project on localhost:3001. Input "Miami" in your browser to verify API functionality and observe the terminal to see the API key served from your .env file.

### Polykey Branch

**Pre-requisite:** Set up Polykey by following the [Polykey Documentation](https://polykey.com/docs/tutorials/polykey-cli/).

1. **Create a Temporary Text File:** Outside the repository, create **"OPEN_WEATHER_MAP_API_KEY.txt"** and add your API key.

   **TIP:** Use the following command to create the file quickly:

   ```bash
   echo "your_api_key_here" > OPEN_WEATHER_MAP_API_KEY.txt
   ```

2. **Start Polykey & Create a Vault named "Weather-Ops":**

```bash
polykey agent start --background
```

```bash
polykey vaults create Weather-Ops
```

3. **Add Your API Key as a Secret:**

```bash
polykey secrets create ./OPEN_WEATHER_MAP_API_KEY.txt Weather-Ops:OPEN_WEATHER_MAP_API_KEY
```

4. **Start the Project**
   Run `npm start` to use Polykey's environment management. Visit `localhost:3000`, input "Miami", and check API functionality & terminal output for dynamic API key injection.

## Key Differences Between Branches

### Traditional-env Branch

In the `traditional-env` branch, environment variables are managed using the `dotenv` npm package, which loads variables from a `.env` file into the application's environment at runtime:

```bash
require('dotenv').config();
const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
```

This approach involves storing sensitive information like API keys in plain text within the `.env` file. When npm start is executed, dotenv loads these variables into `process.env`, making them accessible throughout the application. While this method is straightforward and widely used, it exposes potential security vulnerabilities, such as the risk of exposing sensitive data if the `.env` file is not properly secured.

### Polykey Branch

In the `Polykey` branch, the management of environment variables is handled through Polykey's `secrets env` command, which securely retrieves and injects secrets directly into the application's runtime environment:

```bash
"scripts": {
    "start": "polykey secrets env --env Weather-Ops:OPEN_WEATHER_MAP_API_KEY -- node server.js",
}
```

This setup eliminates the need for a local `.env` file by storing secrets securely within Polykey vaults. The polykey secrets env command specified in the `package.json` is executed before the server starts, dynamically injecting the API key into the environment. Unlike the dotenv method, this approach ensures that secrets are encrypted at rest and only exposed in memory, enhancing security by reducing the risk of accidental secret exposure.

### Code Differences

- **dotenv approach:** Requires including the `dotenv` package and explicitly loading the environment variables from the `.env` file.

- **Polykey approach:** Removes the dependency on the `dotenv` package and the `.env` file, replacing it with a secure secret management system that injects environment variables directly at runtime.

## Conclusion

This demonstration highlights the significant benefits and potential drawbacks of transitioning from traditional .env files to Polykey for secure environment variable management in Node.js projects. While currently recommended for development environments, Polykey's approach enhances security through encryption and dynamic injection, proving invaluable for managing sensitive configurations. By transitioning to Polykey, developers can enhance the security and reliability of their projects, particularly beneficial in environments where data security is paramount. We encourage you to implement Polykey in your projects, replacing .env methods, and to share your experiences with us!
