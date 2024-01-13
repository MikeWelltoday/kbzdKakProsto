import React, { FC, useState } from "react";

//=================================================================================================================================================

//=================================================================================================================================================

export const OnnOffDimich: FC = () => {
  const [on, setOn] = useState<boolean>(false);

  function onClickHandlerOn() {
    setOn(true);
  }

  function onClickHandlerOff() {
    setOn(false);
  }

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    cursor: "pointer",
    backgroundColor: `${on ? "#4ed955" : "white"}`,
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "2px",
    cursor: "pointer",
    backgroundColor: `${on ? "white" : "#e15d5d"}`,
  };
  const indicatorStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: `${on ? "#4ed955" : "#e15d5d"}`,
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
