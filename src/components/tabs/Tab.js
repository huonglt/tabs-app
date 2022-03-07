import React from "react";

const Tab = (props) => {
  const { active, label, value, onClick } = props;

  const onClickHandler = () => {
    onClick(value);
  };
  return (
    <div
      role="tab"
      aria-selected={active}
      aria-controls={value}
      value={value}
      onClick={onClickHandler}
      tabIndex={active ? 0 : -1}
      id={value}
    >
      {label}
    </div>
  );
};

export default Tab;
