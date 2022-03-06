import React, { useState } from "react";

import Tab from "./Tab";
import TabPanel from "./TabPanel";
import "./tabs.css";

const Tabs = (props) => {
  const { children } = props;

  const firstTabChildValue = "1";
  const [activeTabId, setActiveTabId] = useState(firstTabChildValue);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  return (
    <div role="tablist" aria-label="Sample tab list" className="tabs">
      <div>
        {children.map((child, index) => {
          console.log(
            `child.type = ${child.type.name}, child.label = ${child.label}, child.value = ${child.value}`
          );
          if (child.type.name === "Tab") {
            return (
              <Tab
                key={`tab-${index}`}
                value={child.props.value}
                label={child.props.label}
                onClick={handleTabClick}
                selected={child.props.value === activeTabId}
              ></Tab>
            );
          }
          return null;
        })}
      </div>
      {/* Tab panel container */}
      <div>
        {children.map((child, index) => {
          if (
            child.type.name === "TabPanel" &&
            child.props.value === activeTabId
          ) {
            return child;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Tabs;
