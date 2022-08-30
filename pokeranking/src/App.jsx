import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Home from "./Pages/Home";
import Ranking from "./Pages/Ranking";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  const [tipoSelecionado, setTipoSelecionado] = useState("NA")
  const [statusSelecionado, setStatusSelecionado] = useState("total")

  const configFiltro = {
    alteraFiltro(tipoFiltro) {
      console.log("O típo selecionado é: ", tipoFiltro)
      setTipoSelecionado(tipoFiltro)
    },

    alteraStatus(statusFiltro) {
      console.log("O status selecionado é: ", statusFiltro)
      setStatusSelecionado(statusFiltro)
    }
  }

  return (
    <div className="page-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home configFiltro={configFiltro}/>} />
          <Route path="/ranking" element={<Ranking configFiltro={configFiltro} tipoSelecionado={tipoSelecionado} statusSelecionado={statusSelecionado}/>} />
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
