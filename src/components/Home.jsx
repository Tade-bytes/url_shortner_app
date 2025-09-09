import React from "react";
// import { useEffect, useState } from "react";
// import { createShortLink } from "./api";
// import { auth, signInWithGoogle, logout } from "./firebaseConfig";
// import { onAuthStateChanged } from "firebase/auth";

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Linkly</h1>
          <div className="flex items-center gap-3">
            {/* {user ? ( */}
              <>
                {/* <span className="text-sm">Hi, {user.displayName?.split(" ")[0] || "User"}</span> */}
                <button
                  // onClick={logout}
                  className="px-3 py-1 rounded-md border"
                >
                  Log out
                </button>
              </>
            {/* ) : ( */}
              <button
                // onClick={signInWithGoogle}
                className="px-3 py-1 rounded-md bg-black text-white"
              >
                Sign in with Google
              </button>
            {/* )} */}
          </div>
        </header>

        {/* {!user && ( */}
          <div className="text-sm text-gray-600">
            Free trials left: 
            {/* <b>{trialsLeft}</b>  */}
            (3 total). Sign in for unlimited use.
          </div>
        {/* )} */}

        <form className="space-y-3">
          <input
            type="url"
            placeholder="https://example.com/very/long/link"
            // value={longUrl}
            // onChange={(e) => setLongUrl(e.target.value)}
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="creating your magic link......"
            // value={alias}
            // onChange={(e) => setAlias(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />
          <button
            type="submit"
            // disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-60"
          >
            {/* {loading ? "Shortening..." : "Shorten Link"} */}
          </button>
        </form>

        {/* {errorMsg && ( */}
          <div className="text-red-600 text-sm">
            {/* {errorMsg} */}
            </div>
        {/* )} */}

        {/* {result && ( */}
          <div className="space-y-3">
            <div>
              <div className="text-sm text-gray-500">Short URL</div>
              <a
                // href={result.shortUrl}
                className="text-blue-600 underline break-all"
                target="_blank" rel="noreferrer"
              >
                {/* {result.shortUrl} */}
              </a>
              <button
                // onClick={() => navigator.clipboard.writeText(result.shortUrl)}
                className="ml-2 text-xs px-2 py-1 rounded border"
              >
                Copy
              </button>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">QR Code</div>
              <img
                // src={result.qrCode}
                alt="QR"
                className="border rounded-lg p-2 max-w-[240px] bg-white"
              />
              <div className="mt-2">
                <a
                  // href={result.qrCode}
                  download="qr.png"
                  className="text-sm px-3 py-1 rounded-md border"
                >
                  Download PNG
                </a>
              </div>
            </div>
          </div>
        {/* )} */}

        <footer className="text-xs text-gray-500">
          Built with React, Firebase, and ❤️
        </footer>
      </div>
    </div>
  );
}
