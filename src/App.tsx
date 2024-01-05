import React from "react";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";

//=================================================================================================================================================

type PageTitleType = {
  title: string;
};

//=================================================================================================================================================

// function
function App() {
  return (
    <div className="App">
      <PageTitle title="This is AppComponent" />
      <Rating value={2} />
      <Accordion title="#Menu" collapsed={false} />
      <Accordion title="#Users" collapsed={false} />
      <OnOff />
    </div>
  );
}

export default App;

function PageTitle(props: PageTitleType) {
  return <h1>{props.title}</h1>;
}
