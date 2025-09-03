import express from 'express';
import { getWeatherByCity } from '../services/weatherService.js';

const router = express.Router();

// GET /api/weather/current?city=London
router.get('/current', async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const data = await getWeatherByCity(city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

export default router;
