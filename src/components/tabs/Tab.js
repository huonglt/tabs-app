import React from "react";

const Tab = (props) => {
  const { selected, tabindex, label, value, onClick } = props;
  console.log(`Tab: label = ${label}`);
  const onClickHandler = () => {
    onClick(value);
  };
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={value}
      tabIndex={tabindex}
      value={value}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Tab;
