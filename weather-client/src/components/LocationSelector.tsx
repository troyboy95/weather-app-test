import React from "react";

interface LocationOption {
  value: string;
  label: string;
}

interface Props {
  location: string;
  setLocation: (value: string) => void;
}

/**
 * Ideally this could come from backend in future.
 * Keeping it separated makes scaling easier.
 */
const LOCATIONS: LocationOption[] = [
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

const LocationSelector: React.FC<Props> = ({ location, setLocation }) => {
  return (
    <div className="flex flex-col items-center mt-6 mb-4">
      <label className="mb-2 font-medium text-gray-700">
        Change location to see latest weather for that area
      </label>

      <select
        className="w-72 border rounded-md p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        {LOCATIONS.map((loc) => (
          <option key={loc.value} value={loc.value}>
            {loc.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;