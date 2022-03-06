import React from "react";
import TabPanel from "./TabPanel";
import Tab from "./Tab";
import "./tabs.css";

const Tabs = (props) => {
  const { children } = props;
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
              value={child.value}
              label={child.props.label}
            ></Tab>
          );
        }
        return null;
      })}

      {/* Tab panel container */}
      <div></div>
    </div>
  );
};

export default Tabs;
