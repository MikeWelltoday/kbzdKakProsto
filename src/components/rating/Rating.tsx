import React, { FC, useState } from "react";

//=================================================================================================================================================

//=================================================================================================================================================

export const Rating: FC = () => {
  const [star, setStar] = useState<number>(0);

  const liStyles = {
    listStyleType: "none",
    display: "inline-block",
    padding: "0 10px",
    cursor: "pointer",
  };

  return (
    <ul>
      {[1, 2, 3, 4, 5].map((item) => {
        function onClickHandler() {
          setStar(item);
        }

        return (
          <li onClick={onClickHandler} key={item} style={liStyles}>
            <Star selected={star >= item} />
          </li>
        );
      })}
    </ul>
  );
};

const Star: FC<{ selected: boolean }> = ({ selected }) => {
  return selected ? (
    <span>
      <b>Star </b>
    </span>
  ) : (
    <span>Star </span>
  );
};
