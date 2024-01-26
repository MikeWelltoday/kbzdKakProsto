import { RatingUncontrolled } from "./RatingUncontrolled";
import React, { useState } from "react";
import { ratingValueType } from "../../App";

export default {
  title: "RatingUncontrolled",
  component: RatingUncontrolled,
};

export const BaseState = () => {
  const [value, setValue] = useState<ratingValueType>(0);

  const liStyles = {
    listStyleType: "none",
    display: "inline-block",
    padding: "0 10px",
    cursor: "pointer",
  };

  return (
    <ul>
      {[1, 2, 3, 4, 5].map((item) => {
        const ratingItem = item as ratingValueType;

        function onClickHandler() {
          setValue(ratingItem);
        }

        return (
          <li key={item} style={liStyles}>
            <span onClick={onClickHandler}>
              {value >= item ? <b>Star </b> : "Star"}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
