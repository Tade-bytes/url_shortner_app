import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { lookupLongUrl } from "./api";

export default function Redirect() {
  const { shortId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { longUrl } = await lookupLongUrl(shortId);
        // client-side redirect
        window.location.replace(longUrl);
      } catch (e) {
        console.error(e);
        // Show a simple error page if not found
        document.body.innerHTML = `
          <div style="font-family: system-ui; padding: 2rem; text-align: center">
            <h1>Link not found</h1>
            <p>Sorry, this short link doesn't exist.</p>
          </div>
        `;
      }
    })();
  }, [shortId]);

  return null;
}
