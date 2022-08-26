import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Ranking from "./Pages/Ranking";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <div className="page-container">
      <Router>
        <Header setPokemonName={setPokemonName} />
        <Routes>
          <Route path="/" element={<Home pokemonName={pokemonName} />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/equipe" element={""} />
          <Route path="/comparar" element={""} />
          <Route path="/como-usar" element={""} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
