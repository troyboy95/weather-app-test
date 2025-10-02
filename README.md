# Hong Kong Weather App

A simple web application to display real-time weather data for various regions in Hong Kong using the HK Observatory API.

## Features

- **Region Selection:** View weather for multiple Hong Kong districts.
- **Current Conditions:** See temperature, humidity, and weather condition for the selected region.
- **Animated Icons:** Weather conditions are visualized with animated icons powered by [react-lottie](https://github.com/LottieFiles/react-lottie).
- **Live Data:** All data is fetched from the official HK Observatory API.

## Tech Stack

- **Backend:** [Express.js](https://expressjs.com/)
- **Frontend:** [React](https://react.dev/) (bootstrapped with [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [react-lottie](https://github.com/LottieFiles/react-lottie)

## How It Works

### Backend

- Built with Express.js.
- Fetches weather data from the HK Observatory API.
- Maps weather icon codes to readable conditions using custom mappings based on HK API documentation.
- Provides a REST API endpoint for the frontend to consume.

### Frontend

- Built with React and Vite.
- Allows users to select a region from a dropdown.
- Displays current temperature, humidity, and weather condition.
- Shows animated weather icons using react-lottie.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/hk-weather-app.git
cd weather-app-test
```

### 2. Backend Setup

```bash
cd weather-server
npm install
# Add your HK Observatory API endpoint to a .env file as HK_OBSERVATORY_API (https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en) -- This is what I've used
npm run start
```

### 3. Frontend Setup

```bash
cd weather-client
npm install
npm run dev
```

### 4. Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Select a region to view its current weather.

---

*Powered by HK Observatory API*