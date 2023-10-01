import React from "react";
import { Model } from "./components/Model";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";

function App() {
  return (
    <div>
      <NavBar />
      <div className="snap snap-y snap-mandatory h-screen overflow-auto">
        {modelsData.map((model, index) => (
          <Model key={index} {...model} />
        ))}
      </div>
    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE
