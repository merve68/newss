import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Lang from "./Components/Language/Lang";
import Categories from "./Components/Categories/Categories";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Watch from "./Components/Pages/Watch";
import Flash from "./Components/Pages/flash";
import Contact from "./Components/Pages/contact";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categories />
      <Main />
      <Lang />
      <Footer />

      <Routes>
  
        <Route path="/watch" element={<Watch />} />
        <Route path="/flash" element={<Flash/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
   
    </div>
  );
};

export default App;
