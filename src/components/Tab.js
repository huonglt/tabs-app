import React from "react";

const Tab = (props) => {
  const { selected, name, id, tabindex, children, key } = props;
  return (
    <button
      role="tab"
      aria-selected={selected}
      aria-controls={name}
      id={id}
      tabindex={tabindex}
      key={key}
    >
      {children}
    </button>
  );
};

export default Tab;
