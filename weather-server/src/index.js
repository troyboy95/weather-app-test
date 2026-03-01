import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.route.js";
import { config } from "./config.js";

const app = express();

app.use(
  cors({
    origin: config.allowedOrigins,
  })
);

app.get("/", (_, res) => res.send("Weather API Running"));

app.use("/api/weather", weatherRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;