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
    // State to keep track of the current visible model/section.
  const [currentModel, setCurrentModel] = useState(null);
    // State to determine if the current section has a video.
  const [hasVideo, setHasVideo] = useState(true); 
    // Ref to the main scrolling container. Used to programmatically control the scroll.
  const scrollContainerRef = useRef(null);

    // Handler to update the state as user scrolls through sections.
  const handleScroll = (e) => {
    const index = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentModel(sectionsData[index]?.name || '');  
    setHasVideo(sectionsData[index]?.video !== null || false);  
  };

    // Handler to programmatically scroll to a particular section based on its ID.
  const handleModelScroll = (sectionId) => {
    const idx = sectionsData.findIndex((s) => s.id === sectionId);  
    if (idx !== -1 && scrollContainerRef.current) {
      const targetPosition = idx * window.innerHeight;
      scrollContainerRef.current.scrollTo(0, targetPosition);
    }
  };

  return (
    <div>
            {/* NavBar provides navigation controls and dynamically updates based on the current section. */}
      <NavBar
        currentModel={currentModel}
        hasVideo={hasVideo}
        handleModelScroll={handleModelScroll}
      />
            {/* Main scrollable container containing all product/service sections. */}
      <div
        className="scroll-snap-container"
        onScroll={handleScroll}
        ref={scrollContainerRef}
      >
                {/* Dynamically render the sections based on the sectionsData array. */}
        {sectionsData.map((section, index) => (
          <div className="scroll-snap-section" key={index} id={section.id}>
            {
                            // A dynamic rendering pattern using object keys as section names.
              {
                "Model 3": <TeslaModels {...section} />,
                "Model Y": <TeslaModels {...section} />,
                "Model S": <TeslaModels {...section} />,
                "Model X": <TeslaModels {...section} />,
                "Experience Tesla": <ExperienceTesla />,
                "Solar Panels": <SolarPanels />,
                "Solar Roof": <SolarRoof />,
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
