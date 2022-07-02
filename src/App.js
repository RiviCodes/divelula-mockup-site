import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Intro />
    </React.Fragment>
  );
}

export default App;
