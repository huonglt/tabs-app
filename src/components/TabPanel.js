import React from "react";

const TabPanel = (props) => {
  const { children, value, index, id } = props;
  return (
    <div
      role="tabpanel"
      id={id}
      value={value}
      index={index}
      aria-labelledby="tab-panel"
    >
      {children}
    </div>
  );
};

export default TabPanel;
