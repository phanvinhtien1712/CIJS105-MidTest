import React from "react";
import Navbar from "./components/Navbar";
import ExploreSection from "./components/ExploreSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgba(25,32,38,1)]   font-poppins">
      {/* Navbar */}
      <Navbar />
      <ExploreSection /> 
    </div>
  );
}

export default App;
