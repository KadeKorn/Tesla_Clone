import React, { useState, useRef } from "react";
import { Model } from "./components/Model";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";
import "./index.css";

function App() {
  const [currentModel, setCurrentModel] = useState(null);
  const [hasVideo, setHasVideo] = useState(true); // Initialize to true since the first section has a video

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(modelsData[index].name);
    setHasVideo(modelsData[index].video !== null);
  };

  const scrollContainerRef = useRef(null);

  return (
    <div>
      <NavBar currentModel={currentModel} hasVideo={hasVideo} />
      <div
        className="scroll-snap-container"
        onScroll={handleScroll}
        ref={scrollContainerRef}
      >
        {modelsData.map((model, index) => (
          <div
            className="scroll-snap-section"
            key={index}
            id={model.name.toLowerCase()}
          >
            <Model {...model} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE
