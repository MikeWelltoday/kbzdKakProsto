import React, { FC, JSX, useState } from "react";

//===========================================================================================

type accordionControlledPropsType = {
  onClick: (accordionControlledCollapsed: boolean) => void;
  collapsed: boolean;
};

//===========================================================================================

export const AccordionControlled: FC<accordionControlledPropsType> = (
  props,
) => {
  function onClickHandler() {
    props.collapsed ? props.onClick(false) : props.onClick(true);
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
        Menu Controlled
      </h2>
      {props.collapsed ? accordionBody : <h3>nothing to show</h3>}
    </div>
  );
};
