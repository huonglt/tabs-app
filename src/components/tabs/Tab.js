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
    >
      {label}
    </div>
  );
};

export default Tab;
