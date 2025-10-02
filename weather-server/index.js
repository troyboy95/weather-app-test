import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { ICON_MAP, SEVERITY } from "./types/conditionCode.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors(
  {origin: 'http://localhost:5173'}
));

const PORT = 4000;

//tesing end-point
app.get("/", (req, res) => {
  res.send("Weather Server is running!");
});

// Fetching data as per location selected
app.get("/api/weather/:location", async (req, res) => {
  try {
    const { location } = req.params;
    const locationFormatted = location.split('-').join(' ').toLowerCase();

    const weatherResponse = await fetch(
      process.env.HK_OBSERVATORY_API
    );
    const weatherData = await weatherResponse.json();

    const placeData = weatherData.temperature.data.find(
      (item) => item.place.toLowerCase() === locationFormatted
    );

    if (!placeData) {
      return res.status(404).json({ error: "Location not found" });
    }

    const temp = placeData.value;
    const iconCodes = weatherData.icon;

    const conditions = iconCodes.map((code) => ICON_MAP[code] || "Unknown");

    // Finding the most severe condition
    let prominentCondition = conditions[0];
    let maxSeverity = -1;

    for (const cond of conditions) {
      // Default severity = 0 if not in the SEVERITY map
      const sev = SEVERITY[cond] || 0;
      if (sev > maxSeverity) {
        prominentCondition = cond;
        maxSeverity = sev;
      }
    }

    // Sending basic details
    res.status(200).json({
      location: placeData.place,
      temperature: temp,
      conditions: conditions, // for multiple/mixed conditions
      prominentCondition: prominentCondition, // main condition to be rendered
      humidity: weatherData.humidity.data[0].value,
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch weather data: " + err.message
    });
  }
});


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
