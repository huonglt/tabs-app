import React from "react";

const Tab = (props) => {
  const { selected, label, value, onClick } = props;

  const onClickHandler = () => {
    onClick(value);
  };
  return (
    <div
      role="tab"
      aria-selected={selected}
      aria-controls={value}
      value={value}
      onClick={onClickHandler}
      tabIndex={selected ? 0 : -1}
    >
      {label}
    </div>
  );
};

export default Tab;
