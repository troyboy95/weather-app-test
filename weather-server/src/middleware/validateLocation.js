export function validateLocation(req, res, next) {
  const { location } = req.params;

  if (!location || location.length > 50) {
    return res.status(400).json({ error: "Invalid location format" });
  }

  next();
}