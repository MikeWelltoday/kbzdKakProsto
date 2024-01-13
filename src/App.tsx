import React from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { OnnOffDimich } from "./components/OnOffDimich/OnnOffDimich";

//=================================================================================================================================================

//=================================================================================================================================================

function App() {
  return (
    <div className="App">
      <OnOff />
      <OnnOffDimich />
      <Accordion />
      <Rating />
    </div>
  );
}

export default App;
