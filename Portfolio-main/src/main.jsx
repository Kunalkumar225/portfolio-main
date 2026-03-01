import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

window.onerror = (message, source, lineno, colno, error) => {
  console.error("GLOBAL ERROR caught:", { message, source, lineno, colno, error });
  // Add a visual indicator for the user during this stabilization phase
  const entry = document.createElement('div');
  entry.style.cssText = "position:fixed;top:0;left:0;z-index:99999;background:red;color:white;padding:10px;font-family:monospace;max-width:100%;word-break:break-all;";
  entry.innerText = `FATAL ERROR: ${message}`;
  document.body.appendChild(entry);
};

window.onunhandledrejection = (event) => {
  console.error("UNHANDLED REJECTION caught:", event.reason);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
