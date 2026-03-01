import express from "express";
import { weatherController } from "../controllers/weather.controller.js";
import { validateLocation } from "../middleware/validateLocation.js";

const router = express.Router();

router.get("/:location", validateLocation, weatherController);

export default router;