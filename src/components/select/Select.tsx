import React, { FC, useState } from "react";
import s from "./Select.module.scss";
import { List } from "./List";

//======================================================================================<

const selectData: { id: string; select: string }[] = [
  { id: "msc", select: "Moscow" },
  { id: "mnsk", select: "Minsk" },
  { id: "bjng", select: "Beijing" },
  { id: "nvsb", select: "Novosibirsk" },
  { id: "tmk", select: "Tomsk" },
];

export const Select: FC = () => {
  const [mode, setMode] = useState(true);
  const [shown, setShown] = useState(selectData[0]);

  let filteredSelectData = selectData.filter((s) => s.id !== shown.id);

  function newSelect(id: string) {
    let finded = selectData.find((item) => item.id === id);
    if (finded) {
      setShown(finded);
      setMode(false);
    }
  }

  return (
    <div className={s.select}>
      <div className={s.selectBody}>
        <p>{shown.select}</p>
        <button className={s.button} onClick={() => setMode(!mode)}>
          ⇩
        </button>
      </div>
      <div className={s.listBody}>
        {mode && <List selectData={filteredSelectData} newSelect={newSelect} />}
      </div>
    </div>
  );
};
