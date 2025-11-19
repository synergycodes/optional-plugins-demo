import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Plugins entry point
import "@/features/plugins-core";

import "@/features/i18n";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
