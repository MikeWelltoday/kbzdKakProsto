import React from "react";

//=================================================================================================================================================

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

type AccordionTitlePropsType = {
  title: string;
};

//=================================================================================================================================================

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.title} />
      {props.collapsed ? <AccordionBody /> : <h1>nothing to show</h1>}
    </div>
  );
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2>{props.title}</h2>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
