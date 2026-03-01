const cacheStore = new Map(); // -- using in-memory cache for this use case, for scaling Redis is a better choice.

export function setCache(key, value, ttl) {
  const expiry = Date.now() + ttl;
  cacheStore.set(key, { value, expiry });
}

export function getCache(key) {
  const entry = cacheStore.get(key);
  if (!entry) return null;

  if (Date.now() > entry.expiry) {
    cacheStore.delete(key);
    return null;
  }

  return entry.value;
}