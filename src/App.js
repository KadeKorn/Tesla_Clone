import React, { useState, useEffect } from "react";
import { Model } from "./components/Model";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";
import "./index.css";

function App() {
  const [currentModel, setCurrentModel] = useState(null);

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(modelsData[index].name);
  };

  return (
    <div>
      <NavBar currentModel={currentModel} />
      <div className="scroll-snap-container" onScroll={handleScroll}>
        {modelsData.map((model, index) => (
          <div className="scroll-snap-section" key={index}>
            <Model {...model} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE
