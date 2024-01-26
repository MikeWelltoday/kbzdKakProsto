import React, { useState } from "react";
import { AccordionControlled } from "./AccordionControlled";

export default {
  title: "AccordionControlled",
  component: AccordionControlled,
};

export const BaseState = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <AccordionControlled
      onClick={() => {
        setCollapsed(!collapsed);
      }}
      onChange={collapsed}
    />
  );
};
