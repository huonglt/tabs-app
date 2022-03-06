import React from "react";

const Tabs = (props) => {
  const { children } = props;
  return (
    <div role="tablist" aria-label="Sample tab list">
      {children}
    </div>
  );
};

export default Tabs;
