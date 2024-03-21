import React from "react";
// import "./index.css";




import App from './App'



import { createRoot } from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
