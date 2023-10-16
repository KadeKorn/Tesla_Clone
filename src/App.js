import React, { useState, useRef } from "react";
import { TeslaModels } from "./components/TeslaModels";
import { NavBar } from "./components/NavBar";
import { ExperienceTesla } from "./components/ExperienceTesla";
import { SolarPanels } from "./components/SolarPanels";
import { SolarRoof } from "./components/SolarRoof";
import { PowerWall } from "./components/PowerWall";
import { Accessories } from "./components/Accessories";
import { sectionsData } from "./sectionsData"; 
import "./index.css";

function App() {
  const [currentModel, setCurrentModel] = useState(null);
  const [hasVideo, setHasVideo] = useState(true); 
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(sectionsData[index]?.name || '');  
    setHasVideo(sectionsData[index]?.video !== null || false);  
  };

  const handleModelScroll = (sectionId) => {
    console.log("Attempting to scroll to:", sectionId);
    const idx = sectionsData.findIndex((s) => s.id === sectionId);  
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
        style={{zIndex: 1000}}
      >
        {sectionsData.map((section, index) => (
          <div className="scroll-snap-section" key={index} id={section.id}>
            {
              {
                "Model 3": <TeslaModels {...section} />,
                "Model Y": <TeslaModels {...section} />,
                "Model S": <TeslaModels {...section} />,
                "Model X": <TeslaModels {...section} />,
                "Experience Tesla": <ExperienceTesla />,
                "Solar Roof": <SolarRoof />,
                "Solar Panels": <SolarPanels />,
                "Powerwall": <PowerWall />,
                "Accessories": <Accessories />
              }[section.name]
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE
