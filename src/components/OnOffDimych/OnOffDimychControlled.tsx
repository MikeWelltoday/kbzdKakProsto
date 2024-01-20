import React, { FC, useState } from "react";

//=================================================================================================================================================

type onOffDimychControlledPropsType = {
  onOff: boolean;
  onClick: (onOff: boolean) => void;
};

//=================================================================================================================================================

export const OnOffDimychControlled: FC<onOffDimychControlledPropsType> = (
  props,
) => {
  function onClickHandlerOn() {
    props.onClick(true);
  }

  function onClickHandlerOff() {
    props.onClick(false);
  }

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    cursor: "pointer",
    backgroundColor: `${props.onOff ? "#4ed955" : "white"}`,
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    cursor: "pointer",
    backgroundColor: `${props.onOff ? "white" : "#e15d5d"}`,
  };
  const indicatorStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: `${props.onOff ? "#4ed955" : "#e15d5d"}`,
  };

  return (
    <div>
      <div style={onStyle} onClick={onClickHandlerOn}>
        on
      </div>
      <div style={offStyle} onClick={onClickHandlerOff}>
        off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
