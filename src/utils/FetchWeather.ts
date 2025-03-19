import axios from "axios";

const API_KEY = "5092037d32de4c79b8e120839250902"; // Get it from WeatherAPI.com
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export async function fetchWeather(city: string) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: city,
        aqi: "no",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
