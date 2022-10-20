import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import Search from "./components/Search";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties />
      <Search />
      <Gallery />
    </div>
  );
}

export default App;
