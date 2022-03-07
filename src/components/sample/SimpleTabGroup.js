import React from "react";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import TabPanel from "../tabs/TabPanel";
import "./sample.css";

const SimpleTabGroup = (props) => {
  return (
    <div>
      <div className="heading">Simple Tab Group Example</div>
      <Tabs label="simple-tab">
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
    </div>
  );
};

export default SimpleTabGroup;
