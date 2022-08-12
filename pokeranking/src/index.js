import "./Assets/reset.css"
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from "./Pages/Home";

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ranking from "./Pages/Ranking";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ranking" element={<Ranking/>}/>
        <Route path="/equipe" element={""}/>
        <Route path="/comparar" element={""}/>
        <Route path="/como-usar" element={""}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();