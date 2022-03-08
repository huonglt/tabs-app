import TabPanel from "../components/tabs/TabPanel";
import { render, screen } from "@testing-library/react";

describe("TabPanel component", () => {
  it("render correctly with WAI ARIA spec", () => {
    render(<TabPanel value="tab1">Content of tab 1</TabPanel>);

    const tabPanel = screen.getByText("Content of tab 1");
    expect(tabPanel.getAttribute("role")).toEqual("tabpanel");
    expect(tabPanel.getAttribute("aria-labelledby")).toEqual("tab1");
    expect(tabPanel.getAttribute("value")).toEqual("tab1");
  });
});
