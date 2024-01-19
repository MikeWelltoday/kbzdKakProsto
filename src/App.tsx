import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { RatingUncontrolled } from "./components/rating/RatingUncontrolled";
import { OnOff } from "./components/OnOff/OnOff";
import { OnnOffDimich } from "./components/OnOffDimich/OnnOffDimich";
import { RatingControlled } from "./components/rating/RaitingControlled";

//=================================================================================================================================================

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5;

//=================================================================================================================================================

function App() {
  const [ratingControlledValue, setRatingControlledValue] =
    useState<ratingValueType>(0);

  function onClick(value: ratingValueType) {
    setRatingControlledValue(value);
  }

  return (
    <div className="App">
      <OnOff />
      <OnnOffDimich />
      <Accordion />
      <RatingControlled onClick={onClick} value={ratingControlledValue} />
      <RatingUncontrolled />
    </div>
  );
}

export default App;
