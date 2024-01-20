import React, { FC } from "react";
import { ratingValueType } from "../../App";

//=================================================================================================================================================

type ratingControlledPropsType = {
  value: ratingValueType;
  onClick: (ratingControlledValue: ratingValueType) => void;
};

//=================================================================================================================================================

export const RatingControlled: FC<ratingControlledPropsType> = (props) => {
  const liStyles = {
    listStyleType: "none",
    display: "inline-block",
    padding: "0 10px",
    cursor: "pointer",
  };

  return (
    <ul>
      {[1, 2, 3, 4, 5].map((item) => {
        const ratingValue = item as ratingValueType;
        return (
          <li key={item} style={liStyles}>
            <span onClick={() => props.onClick(ratingValue)}>
              {props.value >= item ? <b>Star </b> : "Star"}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
