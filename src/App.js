import React from "react";
import { Model } from "./components/Model";
import { NavBar } from "./components/NavBar";
import { modelsData } from "./modelsData";

function App() {
  return (
    <div className="h-screen">
      <NavBar />
      {modelsData.map((model, index) => (
        <Model key={index} {...model} />
      ))}
    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE
