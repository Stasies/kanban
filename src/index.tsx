import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Ensure TypeScript knows the "root" element exists and is an HTML element
const rootElement = document.getElementById("root") as HTMLElement;

// Create the root React application
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
