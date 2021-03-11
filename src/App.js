import React from "react";

import About from "./views/About";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
