import React, { useState, useRef } from "react";
import { TeslaModels } from "./components/TeslaModels";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";
import { ExperienceTesla } from "./components/ExperienceTesla";
import { sectionsData } from "./sectionsData"; 
import "./index.css";

function App() {
  const [currentModel, setCurrentModel] = useState(null);
  const [hasVideo, setHasVideo] = useState(true); // Initialize to true since the first section has a video
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(sectionsData[index]?.name || '');  // Use sectionsData instead of modelsData
    setHasVideo(sectionsData[index]?.video !== null || false);  // Use sectionsData instead of modelsData
  };

  const handleModelScroll = (sectionId) => {
    console.log("Attempting to scroll to:", sectionId);
    const idx = sectionsData.findIndex((s) => s.id === sectionId);  // Use sectionsData instead of modelsData
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
            <TeslaModels {...model} />
          </div>
        ))}
        <div className="scroll-snap-section" id="experiencetesla">
          <ExperienceTesla />
        </div>
        {/* <div className="scroll-snap-section" id="solarpanels">
          <SolarPanels />
        </div>
        <div className="scroll-snap-section" id="solarroof">
          <SolarRoof />
        </div>
        <div className="scroll-snap-section" id="powerwall">
          <Powerwall />
        </div>
        <div className="scroll-snap-section" id="accessories">
          <Accessories />
        </div> */}
      </div>
    </div>
  );
  //I had a long day with wotk but I am here
}

export default App;
// REACT | TAILWIND | FIREBASE
