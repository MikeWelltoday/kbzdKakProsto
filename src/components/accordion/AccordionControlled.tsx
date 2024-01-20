import React, { FC, JSX } from "react";

//===========================================================================================

type accordionControlledPropsType = {
  onClick: () => void;
  onChange: boolean;
};

//===========================================================================================

export const AccordionControlled: FC<accordionControlledPropsType> = (
  props,
) => {
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
      <h2 onClick={props.onClick} style={titleStyles}>
        Menu Controlled
      </h2>
      {props.onChange ? accordionBody : <h3>nothing to show</h3>}
    </div>
  );
};
