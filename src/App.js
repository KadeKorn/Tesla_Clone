import React, { useState } from "react";
import { Model } from "./components/Model";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";
import "./index.css";

function App() {
  const [currentModel, setCurrentModel] = useState(null);
  const [hasVideo, setHasVideo] = useState(true);  // Initialize to true since the first section has a video

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(modelsData[index].name);
    setHasVideo(modelsData[index].video !== null);
  };

  return (
    <div>
      <NavBar currentModel={currentModel} hasVideo={hasVideo}/>
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
