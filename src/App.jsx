import React from "react";
import "./App.css"; // Importez votre fichier CSS ici
// import Home from  './component/Home';
import NavScrollExample from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./layout/Sidebar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right bottom, #0f0630, #0f0e36, #11133c, #141742, #161c48, #161e50, #152059, #132261, #0d216e, #061f7b, #031d87, #061893)", // width:"800vh" // Ajoutez la hauteur ici
    height: "400vh",
  };

  return (
    // <Router>

    <div style={gradientStyle} className="App">
      <NavScrollExample />
      <Sidebar />
      <Outlet />
      {/*
       */}
    </div>
  );
}

export default App;
