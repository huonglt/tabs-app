import React from "react";

const Tab = (props) => {
  const { selected, label, value, onClick } = props;
  console.log(`Tab: label = ${label}`);
  const onClickHandler = () => {
    onClick(value);
  };
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={value}
      value={value}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Tab;
