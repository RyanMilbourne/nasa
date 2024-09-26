import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { MarsProvider } from "./context/marsRoverContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MarsProvider>
      <App />
    </MarsProvider>
  </StrictMode>
);
