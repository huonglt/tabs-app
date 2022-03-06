import React from "react";

const TabPanel = (props) => {
  const { children, value } = props;
  return (
    <div role="tabpanel" value={value} aria-labelledby={value}>
      {children}
    </div>
  );
};

export default TabPanel;
