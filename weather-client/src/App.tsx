import { useEffect, useState } from "react";
import WeatherBackground from "./components/WeatherBackground";

interface WeatherData {
  location: string;
  temperature: number;
  conditions: string[];
  prominentCondition: string;
  humidity: number;
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("hong-kong-observatory");
  const [loading, setLoading] = useState(false);

  // List of supported locations
  const LOCATIONS = [
    { value: "king's-park", label: "King's Park" },
    { value: "hong-kong-observatory", label: "Hong Kong Observatory" },
    { value: "wong-chuk-hang", label: "Wong Chuk Hang" },
    { value: "ta-kwu-ling", label: "Ta Kwu Ling" },
    { value: "lau-fau-shan", label: "Lau Fau Shan" },
    { value: "tai-po", label: "Tai Po" },
    { value: "tuen-mun", label: "Tuen Mun" },
    { value: "tseung-kwan-o", label: "Tseung Kwan O" },
    { value: "sai-kung", label: "Sai Kung" },
    { value: "cheung-chau", label: "Cheung Chau" },
    { value: "chek-lap-kok", label: "Chek Lap Kok" },
    { value: "tsing-yi", label: "Tsing Yi" },
    { value: "tsuen-wan-ho-koon", label: "Tsuen Wan Ho Koon" },
    { value: "tsuen-wan-shing-mun-valley", label: "Tsuen Wan Shing Mun Valley" },
    { value: "hong-kong-park", label: "Hong Kong Park" },
    { value: "shau-kei-wan", label: "Shau Kei Wan" },
    { value: "kowloon-city", label: "Kowloon City" },
    { value: "happy-valley", label: "Happy Valley" },
    { value: "wong-tai-sin", label: "Wong Tai Sin" },
    { value: "kwun-tong", label: "Kwun Tong" },
    { value: "sham-shui-po", label: "Sham Shui Po" },
    { value: "kai-tak-runway-park", label: "Kai Tak Runway Park" },
    { value: "yuen-long-park", label: "Yuen Long Park" },
    { value: "tai-mei-tuk", label: "Tai Mei Tuk" }
  ];

  useEffect(() => {

    const fetchWeather = async () => {
      try {
        if (!location) return;
        setLoading(true);
        const res = await fetch(`http://localhost:4000/api/weather/${location}`);
        const data = await res.json();
        if (res.status !== 200) {
          console.error("problem here")
          throw new Error(data.error || "Failed to fetch weather data");
        }
        setWeather(data);
        setLoading(false);

      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWeather();

  }, [location]);

  { /*
    Reasons why I like this code: Simple to use and implement, Presents basic & necessary data as per the locations
    Reasons why I don't like: Too Simple, Illustrations could've been better; Only displaying current data, forecast would be better    
    */}

  return (
    <div className="flex flex-col w-full mt-5 flex-1">
      {/* Background with Icons */}
      <WeatherBackground condition={weather ? weather.prominentCondition : ""} />

      <div className=" p-6 w-full text-center z-10">
        <h1 className="text-2xl font-bold mb-4"> Current Weather For</h1>

        {/* Location Selector */}
        <select
          className="mb-6 w-1/4 border rounded-md p-2 bg-gray-800"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {LOCATIONS.map((loc) => (
            <option key={loc.value} value={loc.value}>
              {loc.label}
            </option>
          ))}
        </select>

        {/* Weather Display */}
        {loading ? (
          <p className="text-gray-700">Loading...</p>
        ) : weather ? (
          <>
            <div className="text-lg flex flex-row items-center justify-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M30 18h-6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6v2h-6v10h6Z"
                ></path>
                <circle cx="18" cy="4" r="2" fill="currentColor"></circle>
                <path fill="currentColor" d="M10 20.184V12H8v8.184a3 3 0 1 0 2 0"></path>
                <path
                  fill="currentColor"
                  d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"
                ></path>
              </svg>
              <p>
                <strong>Temperature:</strong> &nbsp; {weather.temperature}°C
              </p>
            </div>
            <div className="text-lg flex flex-row items-center justify-center space-x-3">


              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M6.74 6.772a7.436 7.436 0 0 1 10.519 0a7.43 7.43 0 0 1 0 10.515a7.436 7.436 0 0 1-10.52 0c-2.904-2.905-2.904-7.64 0-10.515M12 20.337c-4.59 0-8.338-3.747-8.338-8.337S7.41 3.692 12 3.692c4.591 0 8.31 3.748 8.31 8.308c0 4.619-3.719 8.337-8.31 8.337m12-8.366L21.27 9.5l1.103-3.514l-3.603-.784l-.784-3.602l-3.515 1.133L11.97.004L9.5 2.734L5.986 1.63L5.2 5.231l-3.602.785l1.133 3.515L0 12.03l2.732 2.47l-1.105 3.514l3.603.784l.784 3.603l3.516-1.134l2.5 2.731l2.468-2.73l3.516 1.103l.785-3.602l3.603-.813l-1.134-3.515z"
                ></path>
              </svg>
              <p className="text-lg">
                <strong>Current Condition:</strong> &nbsp; {weather.prominentCondition}
              </p>
            </div>
            <div className="text-lg flex flex-row items-center justify-center space-x-3">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.044A10 10 0 0 0 7 19a9 9 0 0 0 18 0a10.06 10.06 0 0 0-1.524-5.007M16 26a7.01 7.01 0 0 1-7-7a8 8 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.98 6.98 0 0 1 16 26.001"
                ></path>
              </svg>
              <p>
                <strong> Humidity:</strong> &nbsp; {`${weather.humidity} % (Overall)`}
              </p>
            </div>
          </>
        ) : (
          <p className="text-gray-700">Error loading data at this time. Try changing location or restarting the app...</p>
        )}
      </div>
    </div>
  );
}

export default App


