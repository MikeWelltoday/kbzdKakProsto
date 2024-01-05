import React, { useState } from "react";
import S from "./OnOff.module.css";

//=================================================================================================================================================

export const OnOff = () => {
  const [buttonMode, setButtonState] = useState<boolean>(false);

  function onButtonMode() {
    setButtonState(true);
  }

  function offButtonMode() {
    setButtonState(false);
  }

  function changeOnButtonColor() {
    return buttonMode ? "#7ed782" : "#7a7a83";
  }

  function changeOffButtonColor() {
    return buttonMode ? "#7a7a83" : "#d77e7e";
  }

  return (
    <div className={S.Container}>
      <button
        onClick={onButtonMode}
        style={{ backgroundColor: changeOnButtonColor() }}
      >
        ON
      </button>
      <button
        onClick={offButtonMode}
        style={{ backgroundColor: changeOffButtonColor() }}
      >
        OFF
      </button>
      {buttonMode ? (
        <span style={{ backgroundColor: "#7ed782" }}>yes</span>
      ) : (
        <span style={{ backgroundColor: "#d77e7e" }}>no</span>
      )}
    </div>
  );
};
