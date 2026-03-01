import { getWeatherByLocation } from "../services/weather.service.js";

export async function weatherController(req, res) {
  try {
    const data = await getWeatherByLocation(req.params.location);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message || "Weather service unavailable",
    });
  }
}