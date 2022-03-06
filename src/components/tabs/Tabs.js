import React, { useState } from "react";

import Tab from "./Tab";
import "./tabs.css";

const Tabs = (props) => {
  const { children } = props;

  const firstTabChildValue = "1";
  const [activeTabId, setActiveTabId] = useState(firstTabChildValue);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  return (
    <div role="tablist" aria-label="Sample tab list">
      {children.map((child, index) => {
        const childProps = child.props;
        console.log(`childProps = ${JSON.stringify(childProps)}`);
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
              selected={child.props.id === activeTabId}
            ></Tab>
          );
        }
        return null;
      })}

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