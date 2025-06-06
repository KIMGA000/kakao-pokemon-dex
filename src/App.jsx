import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";
import GlobalStyle from "./styles/GlobalStyle";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <>
      <GlobalStyle /> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
    </>
  );
}

export default App;
