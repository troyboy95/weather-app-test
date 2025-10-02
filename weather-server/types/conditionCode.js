// icon mapping for weather conditions
export const ICON_MAP = {
  // Daytime icons are normally sent
  50: "Sunny",
  51: "Sunny Periods",
  52: "Sunny Intervals",
  53: "Sunny Intervals with Showers",
  54: "Sunny Intervals with Rain",
  60: "Cloudy",
  61: "Overcast",
  62: "Light Rain",
  63: "Rain",
  64: "Heavy Rain",
  65: "Thunderstorms",

  // Nighttime icons are separately categorized
  70: "Sunny Intervals (Night)",
  71: "Sunny Intervals with Showers (Night)",
  72: "Sunny Intervals with Rain and Thunderstorms (Night)",
  73: "Sunny Intervals with Rain (Heavy, Night)",
  74: "Sunny Intervals with Heavy Rain and Thunderstorms (Night)",
  75: "Sunny Intervals with Heavy Rain (Night)",
  76: "Sunny Intervals with Heavy Showers (Night)",
  77: "Sunny Intervals with Showers and Thunderstorms (Heavy, Night)",
  78: "Cloudy (Night)",
  79: "Overcast (Night)",

  80: "Mist",
  81: "Fog",
  82: "Haze",
  83: "Sandstorm",
  84: "Duststorm",
  85: "Drizzle",

  90: "Windy",
  91: "Strong Winds",
  92: "Squally Thunderstorms",
  93: "Cyclone",

  94: "Cold",
  95: "Hot",
  96: "Dry",
  97: "Humid",
};


// severity mapping as per icons
export const SEVERITY = {
  "Cyclone": 6,
  "Squally Thunderstorms": 6,
  "Thunderstorms": 5,
  "Heavy Rain": 4,
  "Rain": 3,
  "Showers": 3,
  "Overcast": 2,
  "Cloudy": 2,
  "Fog": 2,
  "Mist": 2,
  "Haze": 2,
  "Windy": 2,
  "Sunny": 1,
  "Sunny Periods": 1,
  "Sunny Intervals": 1,
  "Hot": 1,
  "Cold": 1,
  "Dry": 1,
  "Humid": 1,
};

