import { AccordionUncontrolled } from "./AccordionUncontrolled";
import React, { JSX, useState } from "react";

export default {
  title: "AccordionUncontrolled",
  component: AccordionUncontrolled,
};

export const BaseState = () => {
  const [collapsed, setCollapsed] = useState(true);

  function onClickHandler() {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  }

  const accordionBody: JSX.Element = (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
    </ul>
  );

  const titleStyles = {
    cursor: "pointer",
  };

  return (
    <div>
      <h2 onClick={onClickHandler} style={titleStyles}>
        Menu Uncontrolled
      </h2>
      {collapsed ? accordionBody : <h3>nothing to show</h3>}
    </div>
  );
};
