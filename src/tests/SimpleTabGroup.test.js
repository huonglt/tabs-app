import { render, screen } from "@testing-library/react";
import Tabs from "../components/tabs/Tab";
import TabPanel from "../components/tabs/TabPanel";
import Tab from "../components/tabs/Tab";
import SimpleTabGroup from "../components/sample/SimpleTabGroup";

describe("SimpleTabGroup", () => {
  it("Accessibility Features correct", () => {
    const { debug } = render(<SimpleTabGroup />);

    const tabListElem = screen.getByRole("tablist");

    expect(tabListElem).toBeInTheDocument();
    expect(tabListElem.getAttribute("aria-label")).toEqual("simple-tab");

    // check each tab
    let tabs = screen.getAllByRole("tab");

    // tab 0, selected
    expect(tabs[0].getAttribute("value")).toEqual("1");
    expect(tabs[0].getAttribute("aria-controls")).toEqual("1");
    expect(tabs[0].getAttribute("tabindex")).toEqual("0");
    expect(tabs[0].getAttribute("id")).toEqual("1");
    expect(tabs[0].getAttribute("aria-selected")).toEqual("true");
    expect(tabs[0].innerHTML).toEqual("ITEM 1");

    // tab 1, not selected
    expect(tabs[1].getAttribute("value")).toEqual("2");
    expect(tabs[1].getAttribute("aria-controls")).toEqual("2");
    expect(tabs[1].getAttribute("tabindex")).toEqual("-1");
    expect(tabs[1].getAttribute("id")).toEqual("2");
    expect(tabs[1].getAttribute("aria-selected")).toEqual("false");
    expect(tabs[1].innerHTML).toEqual("ITEM 2");

    // tab 2, not selected
    expect(tabs[2].getAttribute("value")).toEqual("3");
    expect(tabs[2].getAttribute("aria-controls")).toEqual("3");
    expect(tabs[2].getAttribute("tabindex")).toEqual("-1");
    expect(tabs[2].getAttribute("id")).toEqual("3");
    expect(tabs[2].getAttribute("aria-selected")).toEqual("false");
    expect(tabs[2].innerHTML).toEqual("ITEM 3");

    // tab panel, tab panel will show content of tab 1
    const tabPanel = screen.getByRole("tabpanel");
    expect(tabPanel).toBeInTheDocument();
    expect(tabPanel.getAttribute("aria-labelledby")).toEqual("1");
    const content = screen.getByText("Content of tab 1", tabPanel);
    expect(content).toBeInTheDocument();
  });

  it("select tab by mouse correct", () => {
    
  });
});
