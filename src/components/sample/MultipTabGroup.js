import React from "react";
import Tabs from "../tabs/Tabs";
import Tab from "../tabs/Tab";
import TabPanel from "../tabs/TabPanel";

const MultiTabGroup = (props) => {
  return (
    <div>
      <Tabs>
        <Tab label="GROUP A - ITEM 1" value="tabGroupA-1"></Tab>
        <Tab label="GROUP A - ITEM 2" value="tabGroupA-2"></Tab>
        <Tab label="GROUP A - ITEM 3" value="tabGroupA-3"></Tab>
        <TabPanel value="tabGroupA-1">
          <p>Tab Group A</p>
          <p>Content of Item 1</p>
        </TabPanel>
        <TabPanel value="tabGroupA-2">
          <p>Tab Group A</p>
          <p>Content of Item 2</p>
        </TabPanel>
        <TabPanel value="tabGroupA-3">
          <p>Tab Group A</p>
          <p>Content of Item 3</p>
        </TabPanel>
      </Tabs>

      <Tabs>
        <Tab label="GROUP B ITEM 1" value="tabGroupB-1"></Tab>
        <Tab label="GROUP B ITEM 2" value="tabGroupB-2"></Tab>
        <Tab label="GROUP B ITEM 3" value="tabGrouoB-3"></Tab>
        <TabPanel value="tabGroupB-1">
          <p>Tab Group B</p>
          <p>Content of Item 1</p>
        </TabPanel>
        <TabPanel value="tabGroupB-2">
          <p>Tab Group B</p>
          <p>Content of Item 2</p>
        </TabPanel>
        <TabPanel value="tabGroupB-3">
          <p>Tab Group B</p>
          <p>Content of Item 3</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MultiTabGroup;
