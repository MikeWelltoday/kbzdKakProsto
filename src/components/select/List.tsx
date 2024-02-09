import React, { FC } from "react";

type ListPropsType = {
  selectData: { id: string; select: string }[];
  newSelect: (id: string) => void;
};

export const List: FC<ListPropsType> = (props) => {
  return (
    <>
      {props.selectData.map((s) => {
        function onClickHandler() {
          props.newSelect(s.id);
        }

        return (
          <button key={s.id} onClick={onClickHandler}>
            {s.select}
          </button>
        );
      })}
    </>
  );
};
