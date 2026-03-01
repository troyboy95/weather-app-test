import React from "react";

interface WeatherData {
  location: string;
  temperature: number;
  conditions: string[];
  prominentCondition: string;
  humidity: number;
}

interface Props {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

const WeatherDisplay: React.FC<Props> = ({ data, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center mt-6">
        <p className="text-gray-600">Fetching latest weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-6">
        <p className="text-red-500 font-medium">
          Unable to load weather data.
        </p>
        <p className="text-sm text-gray-500 mt-1">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center mt-6">
        <p className="text-gray-500">No weather data available.</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-6 space-y-4">
      <h2 className="text-xl font-semibold">
        Current Weather – {data.location}
      </h2>

      <div className="flex justify-center items-center space-x-2 text-lg">
        <span>🌡️</span>
        <span>
          <strong>Temperature:</strong> {data.temperature}°C
        </span>
      </div>

      <div className="flex justify-center items-center space-x-2 text-lg">
        <span>🌤️</span>
        <span>
          <strong>Condition:</strong> {data.prominentCondition}
        </span>
      </div>

      <div className="flex justify-center items-center space-x-2 text-lg">
        <span>💧</span>
        <span>
          <strong>Humidity:</strong> {data.humidity}%
        </span>
      </div>

      {/* Optional: Show multiple conditions if present */}
      {data.conditions.length > 1 && (
        <div className="text-sm text-gray-500">
          <p>
            Additional conditions: {data.conditions.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;