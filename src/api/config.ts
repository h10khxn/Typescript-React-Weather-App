export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "https://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY || "missing_api_key",
  DEFAULT_PARAMS: {
    units: "metric",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY, // Add the API key here for dynamic queries
  },
};



if (API_CONFIG.API_KEY === "missing_api_key") {
  console.error("API Key is missing. Ensure your .env file is correctly configured.");
}
