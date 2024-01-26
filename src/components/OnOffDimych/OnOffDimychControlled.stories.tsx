import React, { FC, useState } from "react";
import { OnOffDimychControlled } from "./OnOffDimychControlled";

export default {
  title: "OnOffDimychControlled",
  component: OnOffDimychControlled,
};

type onOffDimychControlledPropsType = {
  onOff: boolean;
  onClick: (onOff: boolean) => void;
};

export const BaseState: FC<onOffDimychControlledPropsType> = (props) => {
  const [onOff, setOnOff] = useState<boolean>(true);

  function onClickHandler() {
    setOnOff(!onOff);
  }

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    cursor: "pointer",
    backgroundColor: `${onOff ? "#4ed955" : "white"}`,
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    cursor: "pointer",
    backgroundColor: `${onOff ? "white" : "#e15d5d"}`,
  };
  const indicatorStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: `${onOff ? "#4ed955" : "#e15d5d"}`,
  };

  return (
    <div>
      <div style={onStyle} onClick={onClickHandler}>
        on
      </div>
      <div style={offStyle} onClick={onClickHandler}>
        off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
