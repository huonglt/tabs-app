import React, { useRef } from "react";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import TabPanel from "../tabs/TabPanel";
import "./sample.css";

const TabGroupWithLink = (props) => {
  const tabGroupRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    tabGroupRef.current.selectTab("2");
  };

  return (
    <div className="relativeContainer">
      <div className="heading">Tab Group With Link To Tab Example</div>
      <Tabs label="simple-tab" ref={tabGroupRef} focusOnMount={true}>
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

      <div className="linkToTab">
        <a href="#2" onClick={handleClick}>
          Click to open tab 2
        </a>
      </div>
    </div>
  );
};

export default TabGroupWithLink;
