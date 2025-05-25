import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PokemonProvider } from "./context/PokemonContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokemonProvider>
      <BrowserRouter basename="/kakao-pokemon-dex">
        <App />
      </BrowserRouter>
    </PokemonProvider>
  </StrictMode>
);
