import Lottie from "react-lottie-player";

import sunAnim from "../assets/lottie/Weather-sunny.json";
import cloudyAnim from "../assets/lottie/Weather-partly cloudy.json";
import rainAnim from "../assets/lottie/rainy icon.json";
import thunderAnim from "../assets/lottie/Weather-storm.json";

import NightAnim from "../assets/lottie/Weather-night.json";
import NightRainAnim from "../assets/lottie/Weather-rainy(night).json";
import NightCloudyAnim from "../assets/lottie/Weather-cloudy(night).json";

export default function WeatherBackground({ condition }: { condition: string }) {
  const getAnimation = () => {
    // Handling night conditions by falling back to day equivalents
    if(condition === "") return null;
    
    if (condition.includes("Night")) {
      if (
        condition.includes("Sunny Intervals") ||
        condition.includes("Sunny Periods") ||
        condition.includes("Sunny")
      ) {
        return NightAnim;
      }
      if (
        condition.includes("Cloudy") ||
        condition.includes("Overcast")
      ) {
        return NightCloudyAnim;
      }
      if (
        condition.includes("Rain") ||
        condition.includes("Showers") ||
        condition.includes("Drizzle")
      ) {
        return  NightRainAnim;
      }
      if (
        condition.includes("Thunderstorms")
      ) {
        return thunderAnim;
      }
    }

    switch (condition) {
      case "Sunny":
      case "Sunny Periods":
      case "Sunny Intervals":
      case "Hot":
        return sunAnim;
      case "Cloudy":
      case "Overcast":
      case "Haze":
      case "Mist":
      case "Fog":
      case "Humid":
        return cloudyAnim;
      case "Rain":
      case "Showers":
      case "Heavy Rain":
      case "Light Rain":
      case "Drizzle":
      case "Sunny Intervals with Showers":
      case "Sunny Intervals with Rain":
      case "Sunny Intervals with Showers (Heavy)":
      case "Sunny Intervals with Rain (Heavy)":
      case "Sunny Intervals with Heavy Rain":
      case "Sunny Intervals with Heavy Showers":
        return rainAnim;
      case "Thunderstorms":
      case "Thunderstorm":
      case "Squally Thunderstorms":
      case "Sunny Intervals with Showers and Thunderstorms":
      case "Sunny Intervals with Rain and Thunderstorms":
      case "Sunny Intervals with Heavy Rain and Thunderstorms":
      case "Sunny Intervals with Showers and Thunderstorms (Heavy)":
        return thunderAnim;
      default:
        return null;
    }
  };

  const animationData = getAnimation();

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-sky-100 indeterminate:bg-sky-300 to-blue-500">
      {animationData && (
        <Lottie
          loop
          play
          animationData={animationData}
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
}
