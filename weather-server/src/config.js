import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  hkApi: process.env.HK_OBSERVATORY_API,
  allowedOrigins: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
  cacheTTL: 5 * 60 * 1000, // 5 minutes
  requestTimeout: 5000
};