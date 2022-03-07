import React, { useRef } from "react";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import TabPanel from "../tabs/TabPanel";

const TabGroupWithLink = (props) => {
  const tabGroupRef = useRef();

  const handleClick = () => {
    tabGroupRef.current.selectTab("2");
  };

  return (
    <div style={{ position: "relative" }}>
      <Tabs label="simple-tab" ref={tabGroupRef}>
        <Tab label="ITEM 1" value="1"></Tab>
        <Tab label="ITEM 2" value="2"></Tab>
        <Tab label="ITEM 3" value="3"></Tab>
        <TabPanel value="1">
          <p>Content of tab 1</p>
        </TabPanel>
        <TabPanel value="2">
          <p>Content of tab 2</p>
        </TabPanel>
        <TabPanel value="3">
          <p>Content of tab 3</p>
        </TabPanel>
      </Tabs>

      <div style={{ position: "absolute", top: "500px" }}>
        <a href="#2" onClick={handleClick}>
          Click to open tab 2
        </a>
      </div>
    </div>
  );
};

export default TabGroupWithLink;
