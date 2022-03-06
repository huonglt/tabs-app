import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import "./tabs.css";

const Tabs = (props) => {
  const { children, label } = props;

  const firstTabChild = children.filter(
    (child) => child.type.name === "Tab"
  )?.[0];
  const [activeTabId, setActiveTabId] = useState(firstTabChild.props.value);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  const ariaLabel = label ?? "A tab group";

  return (
    <div className="tabsGroup">
      <div className="tabs" role="tablist" aria-label={ariaLabel}>
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
      <div className="panelContainer">
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
