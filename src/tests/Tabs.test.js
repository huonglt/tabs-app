import { render, screen } from "@testing-library/react";
import TabPanel from "../components/tabs/TabPanel";
import Tabs from "../components/tabs/Tabs";
import Tab from "../components/tabs/Tab";

describe("TabGroup", () => {
  it("render without problem", () => {
    render(
      <Tabs label="tabs">
        <Tab label="Tab A" value="a" />
        <TabPanel value="a">
          <p>Tab Content</p>
        </TabPanel>
      </Tabs>
    );
  });
});
