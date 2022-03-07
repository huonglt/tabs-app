import React from "react";
import Tabs from "../components/tabs/Tabs";
import Tab from "../components/tabs/Tab";
import TabPanel from "../components/tabs/TabPanel";

export const TwoTabsGroup = (props) => {
  return (
    <Tabs label="two-tabs-group" focusOnMount={true}>
      <Tab label="Tab 1" value="tab1">
        Tab 1
      </Tab>
      <Tab label="Tab 2" value="tab2">
        Tab 2
      </Tab>
      <TabPanel value="tab1">Tab 1 content</TabPanel>
      <TabPanel value="tab2">Tab 2 content</TabPanel>
    </Tabs>
  );
};

export const NoTabPanel = (props) => {
  return (
    <Tabs>
      <Tab label="Tab 1"></Tab>
      <Tab label="Tab 2"></Tab>
    </Tabs>
  );
};

export const NoTab = (props) => {
  return (
    <Tabs>
      <Tab label="Tab 1"></Tab>
      <Tab label="Tab 2"></Tab>
    </Tabs>
  );
};
