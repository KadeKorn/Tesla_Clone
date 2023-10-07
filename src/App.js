import React, { useState, useRef } from "react";
import { Model } from "./components/Model";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";
import "./index.css";

function App() {
  const [currentModel, setCurrentModel] = useState(null);
  const [hasVideo, setHasVideo] = useState(true); // Initialize to true since the first section has a video
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(modelsData[index].name);
    setHasVideo(modelsData[index].video !== null);
  };

  const handleModelScroll = (modelId) => {
    console.log("Attempting to scroll to:", modelId);
    const idx = modelsData.findIndex((m) => m.id === modelId);
    if (idx !== -1 && scrollContainerRef.current) {
      const targetPosition = idx * window.innerHeight;
      scrollContainerRef.current.scrollTo(0, targetPosition);
    }
  };

  return (
    <div>
      <NavBar
        currentModel={currentModel}
        hasVideo={hasVideo}
        handleModelScroll={handleModelScroll}
      />
      <div
        className="scroll-snap-container"
        onScroll={handleScroll}
        ref={scrollContainerRef}
      >
        {modelsData.map((model, index) => (
          <div className="scroll-snap-section" key={index} id={model.id}>
            <Model {...model} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE
