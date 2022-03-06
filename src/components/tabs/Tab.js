import React from "react";

const Tab = (props) => {
  const { selected, name, id, tabindex, label, value } = props;
  console.log(`Tab: label = ${label}`);
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={name}
      id={id}
      tabIndex={tabindex}
      value={value}
    >
      {label}
    </button>
  );
};

export default Tab;
