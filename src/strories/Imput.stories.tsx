import React, { ChangeEvent, useState } from "react";

// ========================================================<
//STORYBOOK - NAME

export default {
  title: "UncontrolledInput",
};

// ========================================================<
//STORYBOOK - STORIES

export function UncontrolledInput() {
  return <input />;
}

export function UncontrolledInputWithTrackingValue() {
  const [value, setValue] = useState("UncontrolledInputWithTrackingValue");

  function inputOnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return <input value={value} onChange={inputOnChangeHandler} />;
}

export function ControlledInputWithFixedValue() {
  return <input value={"We are controlling this input"} />;
}

export function ControlledInput() {
  const [parentValue, setParentValue] = useState("");

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setParentValue(e.currentTarget.value);
  }

  return (
    <>
      <input type="text" value={parentValue} onChange={onChangeHandler} />
    </>
  );
}

export function ControlledCheckbox() {
  const [parentValue, setParentValue] = useState(true);

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setParentValue(event.currentTarget.checked);
  }

  return (
    <input type="checkbox" checked={parentValue} onChange={onChangeHandler} />
  );
}

export function ControlledSelect() {
  const [parentValue, setParentValue] = useState<string | undefined>("2");

  function onChangeHandler(event: ChangeEvent<HTMLSelectElement>) {
    setParentValue(event.currentTarget.value);
  }

  return (
    <select value={parentValue} onChange={onChangeHandler}>
      <option>none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">404</option>
    </select>
  );
}
