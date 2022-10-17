import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties />
      <Search />
    </div>
  );
}

export default App;
