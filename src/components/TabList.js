import React from "react";

const TabList = (props) => {
  const { items } = props;
  return (
    <div role="tablist" aria-label="Sample tab list">
      {items && items.map((item) => <div>{item}</div>)}
    </div>
  );
};

export default TabList;
