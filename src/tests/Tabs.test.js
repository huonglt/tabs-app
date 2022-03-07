import { NoTabPanel, TwoTabsGroup } from "./data";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tabs component", () => {
  describe("TwoTabsGroup component", () => {
    it(`WAI ARIA spec is correct for TwoTabs component`, () => {
      render(<TwoTabsGroup />);

      // role tablist exist
      const tabListElem = screen.getByRole("tablist");

      expect(tabListElem).toBeInTheDocument();
      expect(tabListElem.getAttribute("aria-label")).toEqual("two-tabs-group");

      // check each tab via role tab
      let tabs = screen.getAllByRole("tab");

      // tab 0, selected, value, aria-controls, tabindex, id, aria-selected, and innerHTML correct
      expect(tabs[0].getAttribute("value")).toEqual("tab1");
      expect(tabs[0].getAttribute("aria-controls")).toEqual("tab1");
      expect(tabs[0].getAttribute("tabindex")).toEqual("0");
      expect(tabs[0].getAttribute("id")).toEqual("tab1");
      expect(tabs[0].getAttribute("aria-selected")).toEqual("true");
      expect(tabs[0].innerHTML).toEqual("Tab 1");

      // tab 1, not selected, value, aria-controls, tabindex, id, aria-selected, and innerHTML correct
      expect(tabs[1].getAttribute("value")).toEqual("tab2");
      expect(tabs[1].getAttribute("aria-controls")).toEqual("tab2");
      expect(tabs[1].getAttribute("tabindex")).toEqual("-1");
      expect(tabs[1].getAttribute("id")).toEqual("tab2");
      expect(tabs[1].getAttribute("aria-selected")).toEqual("false");
      expect(tabs[1].innerHTML).toEqual("Tab 2");
    });

    it("select tab by mouse click, content of tab show correctly", () => {
      render(<TwoTabsGroup />);

      let tabPanelContent;

      // click tab 1, content of tab 1 show
      fireEvent.click(screen.getByText("Tab 1"));
      tabPanelContent = screen.getByText("Tab 1 content");
      expect(tabPanelContent).toBeInTheDocument();

      // click tab 2, content of tab 2 show
      fireEvent.click(screen.getByText("Tab 2"));
      tabPanelContent = screen.getByText("Tab 2 content");
      expect(tabPanelContent).toBeInTheDocument();
    });

    it(`tab got focus when user press right arrow key`, () => {
      render(<TwoTabsGroup />);

      // press right arrow on tab 1, tab 2 will have focus
      userEvent.type(screen.getByText("Tab 1"), "{arrowright}");
      expect(screen.getByText("Tab 2")).toHaveFocus();

      // press right arrow on tab 2, tab 1 will have focus
      userEvent.type(screen.getByText("Tab 2"), "{arrowright}");
      expect(screen.getByText("Tab 1")).toHaveFocus();
    });

    it("tab got focus when user press left arrow key", () => {
      render(<TwoTabsGroup />);

      // tab 1 has focus so when press arrow left, tab 2 will have focus
      userEvent.keyboard("{arrowleft}");
      expect(screen.getByText("Tab 2")).toHaveFocus();

      // tab 2 has focus, when press arrow left, tab 1 will have focus
      userEvent.keyboard("{arrowleft}");
      expect(screen.getByText("Tab 1")).toHaveFocus();
    });

    it("select tab by arrow key then press enter, content of the tab will be shown", () => {
      render(<TwoTabsGroup />);

      // press right arrow on tab 1, tab 2 will have focus
      userEvent.type(screen.getByText("Tab 1"), "{arrowright}");
      expect(screen.getByText("Tab 2")).toHaveFocus();

      // type enter, content of tab 2 shown
      userEvent.keyboard("{enter}");
      expect(screen.getByText("Tab 2 content")).toBeInTheDocument();
    });

    it("select tab by arrow key then press space key, content of the tab will be shown", () => {
      render(<TwoTabsGroup />);

      // press right arrow on tab 1, tab 2 will have focus
      userEvent.type(screen.getByText("Tab 1"), "{arrowright}");
      expect(screen.getByText("Tab 2")).toHaveFocus();

      // type space, content of tab 2 shown
      userEvent.keyboard("{space}");
      expect(screen.getByText("Tab 2 content")).toBeInTheDocument();
    });
  });

  describe("NoTabPanel component, Tabs will be rendered but no tab panel content", () => {
    it("render tablist, tab but no tabpanel role", () => {
      render(<NoTabPanel />);

      // role tablist exist
      const tabListElem = screen.getByRole("tablist");
      expect(tabListElem).toBeInTheDocument();
      expect(tabListElem.getAttribute("aria-label")).toEqual(
        "missing-tab-panel"
      );

      // render two elements with role tab
      const tabs = screen.getAllByRole("tab");
      expect(tabs.length).toEqual(2);

      const tabpanels = screen.queryAllByRole("tabpanel");
      expect(tabpanels.length).toEqual(0);
    });
  });
});
