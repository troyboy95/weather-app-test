import { config } from "../config.js";
import { getCache, setCache } from "../utils/cache.js";
import { fetchWithTimeout } from "../utils/httpClient.js";
import { ICON_MAP, SEVERITY } from "../types/conditionCode.js";

export async function getWeatherByLocation(location) {
  const cached = getCache("weather-data");
  let weatherData;

  if (cached) {
    weatherData = cached;
  } else {
    const response = await fetchWithTimeout(config.hkApi, config.requestTimeout);
    weatherData = await response.json();
    setCache("weather-data", weatherData, config.cacheTTL);
  }

  const locationFormatted = location.split("-").join(" ").toLowerCase();

  const placeData = weatherData.temperature.data.find(
    (item) => item.place.toLowerCase() === locationFormatted
  );

  if (!placeData) {
    throw new Error("Location not found");
  }

  const conditions = weatherData.icon.map(
    (code) => ICON_MAP[code] || "Unknown"
  );

  let prominentCondition = conditions[0];
  let maxSeverity = -1;

  for (const cond of conditions) {
    const sev = SEVERITY[cond] || 0;
    if (sev > maxSeverity) {
      prominentCondition = cond;
      maxSeverity = sev;
    }
  }

  return {
    location: placeData.place,
    temperature: placeData.value,
    conditions,
    prominentCondition,
    humidity: weatherData.humidity.data[0].value,
  };
}