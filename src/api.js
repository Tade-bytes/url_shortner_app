import axios from "axios";

// Set this to your Firebase Functions base URL (region may vary)
// Example: https://us-central1-YOUR_PROJECT.cloudfunctions.net
const FUNCTIONS_BASE = import.meta.env.VITE_FUNCTIONS_BASE_URL || "http://localhost:5001/YOUR_PROJECT/us-central1";

// POST /shorten
export async function createShortLink({ longUrl, alias }) {
  const url = `${FUNCTIONS_BASE}/shorten`;
  const res = await axios.post(url, { longUrl, alias });
  return res.data; // { shortId, shortUrl, qrCode }
}

// GET /lookup?id=shortId
export async function lookupLongUrl(shortId) {
  const url = `${FUNCTIONS_BASE}/lookup?id=${encodeURIComponent(shortId)}`;
  const res = await axios.get(url);
  return res.data; // { longUrl }
}
