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

const cardStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.35)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  padding: "18px 20px",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  boxShadow: "0 4px 16px rgba(100, 140, 200, 0.1)",
};

const iconWrapStyle: React.CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  flexShrink: 0,
};

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "rgba(100, 130, 180, 0.8)",
  marginBottom: "2px",
};

const valueStyle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 600,
  color: "rgba(60, 90, 150, 0.9)",
  lineHeight: 1.1,
};

const WeatherDisplay: React.FC<Props> = ({ data, loading, error }) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    // flexDirection: "column",
    justifyContent: 'center',
    gap: "12px",
    padding: "0px 20px",
    borderRadius: "28px",
    minWidth: "260px",
    // maxWidth: "320px",
    margin: "0 auto",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ ...cardStyle, opacity: 0.5 + i * 0.15 }}>
            <div style={{ ...iconWrapStyle, background: "rgba(255,255,255,0.3)" }} />
            <div>
              <div style={{ ...labelStyle, background: "rgba(180,200,240,0.5)", width: 60, height: 8, borderRadius: 4 }} />
              <div style={{ ...valueStyle, background: "rgba(180,200,240,0.5)", width: 80, height: 20, borderRadius: 6, marginTop: 4 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <div style={{ ...cardStyle, justifyContent: "center", flexDirection: "column", gap: 4 }}>
          <span style={{ fontSize: 24 }}>⚠️</span>
          <p style={{ color: "rgba(180, 60, 60, 0.85)", fontWeight: 600, fontSize: 14, margin: 0 }}>
            Unable to load weather data
          </p>
          <p style={{ color: "rgba(100, 120, 160, 0.7)", fontSize: 12, margin: 0 }}>{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={containerStyle}>
        <div style={{ ...cardStyle, justifyContent: "center" }}>
          <p style={{ color: "rgba(100, 130, 180, 0.7)", fontSize: 14, margin: 0 }}>No weather data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Temperature Card */}
      <div style={cardStyle}>
        <div style={{ ...iconWrapStyle, background: "rgba(220, 110, 100, 0.15)" }}>
          🌡️
        </div>
        <div style={{ flex: 1 }}>
          <div style={labelStyle}>Temperature</div>
          <div style={valueStyle}>{data.temperature}°C</div>
        </div>
        <div style={{
          width: "3px",
          height: "36px",
          borderRadius: "2px",
          background: "linear-gradient(to bottom, #e87070, rgba(232,112,112,0.2))",
          flexShrink: 0,
        }} />
      </div>

      {/* Condition Card */}
      <div style={cardStyle}>
        <div style={{ ...iconWrapStyle, background: "rgba(255, 200, 80, 0.2)" }}>
          {data.prominentCondition.toLowerCase().includes("cloud") ? "☁️" :
           data.prominentCondition.toLowerCase().includes("rain") ? "🌧️" :
           data.prominentCondition.toLowerCase().includes("sun") || data.prominentCondition.toLowerCase().includes("clear") ? "☀️" :
           data.prominentCondition.toLowerCase().includes("snow") ? "❄️" :
           data.prominentCondition.toLowerCase().includes("storm") ? "⛈️" : "🌤️"}
        </div>
        <div style={{ flex: 1 }}>
          <div style={labelStyle}>Condition</div>
          <div style={valueStyle}>{data.prominentCondition}</div>
        </div>
        <div style={{
          display: "flex",
          gap: "3px",
          alignItems: "center",
          flexShrink: 0,
        }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "rgba(100, 140, 200, 0.4)",
            }} />
          ))}
        </div>
      </div>

      {/* Humidity Card */}
      <div style={cardStyle}>
        <div style={{ ...iconWrapStyle, background: "rgba(80, 160, 220, 0.15)" }}>
          💧
        </div>
        <div style={{ flex: 1 }}>
          <div style={labelStyle}>Humidity</div>
          <div style={valueStyle}>{data.humidity}%</div>
        </div>
        <div style={{
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #4da6e8, #2980c4)",
          boxShadow: "0 2px 8px rgba(41, 128, 196, 0.4)",
          flexShrink: 0,
        }} />
      </div>

      {data.conditions.length > 1 && (
        <p style={{
          fontSize: "11px",
          color: "rgba(100, 130, 180, 0.7)",
          textAlign: "center",
          margin: "4px 0 0",
        }}>
          Also: {data.conditions.filter(c => c !== data.prominentCondition).join(", ")}
        </p>
      )}
    </div>
  );
};

export default WeatherDisplay;