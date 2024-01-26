import type { Meta } from "@storybook/react";
import React, { useState } from "react";
import { AccordionControlled } from "./AccordionControlled";
import { action } from "@storybook/addon-actions";

export default {
  component: AccordionControlled,
};

//создаем
const onChangeHandler = action("onChange");

export const StateAccordionControlled = () => {
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
