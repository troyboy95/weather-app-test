import { useState } from "react";
import { useWeather } from "./hooks/useWeather.hook";
import WeatherDisplay from "./components/WeatherDisplay";
import LocationSelector from "./components/LocationSelector";
import WeatherBackground from "./components/WeatherBackground";

function App() {
  const [location, setLocation] = useState("hong-kong-observatory");
  const { data, loading, error } = useWeather(location);
  console.log(data)
  return (
    <div className="container">
      <div className="z-50">
        <LocationSelector location={location} setLocation={setLocation} />
        <WeatherDisplay data={data} loading={loading} error={error} />
      </div>
      <WeatherBackground condition={data?.prominentCondition ?? ""} />
    </div>
  );
}

export default App;