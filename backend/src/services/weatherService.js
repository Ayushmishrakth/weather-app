
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function getWeatherByCity(city) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    console.log("Using API Key in service:", apiKey);

    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city,
        appid: apiKey,
        units: "metric"
      }
    });

    return response.data;
  } catch (error) {
    console.error("Weather API Error:", error.response?.data || error.message);
    throw error;
  }
}
