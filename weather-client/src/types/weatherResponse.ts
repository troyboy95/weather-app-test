export interface WeatherData {
  location: string;
  temperature: number;
  conditions: string[];
  prominentCondition: string;
  humidity: number;
}