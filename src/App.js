import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import {  } from "react-router-dom";
import Home from "./Components/Home"
import Header from "./Components/Header";
// import Common from "./Components/Common";



function App() {
  return (
    <>
    
        <Header/>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>      
    </>
  );
}

export default App;
