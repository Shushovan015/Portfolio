import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import About from "./Components/Pages/About";
import Resume from "./Components/Pages/Resume";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div id="pmcv">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
