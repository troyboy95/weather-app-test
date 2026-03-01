import { useEffect, useState } from "react";
import type { WeatherData } from "../types/weatherResponse";

export function useWeather(location: string) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/weather/${location}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch weather for the given location");
        }

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  return { data, loading, error };
}