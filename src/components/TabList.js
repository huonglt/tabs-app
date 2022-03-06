import React from "react";
import Tab from "./Tab";

const TabList = (props) => {
  const { items } = props;
  return (
    <div role="tablist" aria-label="Sample tab list">
      {items && items.map((item, key) => <Tab key={key}>{item}</Tab>)}
    </div>
  );
};

export default TabList;
