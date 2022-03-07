import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SimpleTabGroup from "../components/sample/SimpleTabGroup";

describe("SimpleTabGroup", () => {
  it("Accessibility Features correct", () => {
    render(<SimpleTabGroup />);

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

  it("select tab by mouse click, content of tab show correctly", () => {
    render(<SimpleTabGroup />);
    let tabPanelContent;

    // click tab 1, content of tab 1 show
    fireEvent.click(screen.getByText("ITEM 1"));
    tabPanelContent = screen.getByText("Content of tab 1");
    expect(tabPanelContent).toBeInTheDocument();

    // click tab 2, content of tab 2 show
    fireEvent.click(screen.getByText("ITEM 2"));
    tabPanelContent = screen.getByText("Content of tab 2");
    expect(tabPanelContent).toBeInTheDocument();

    // click tab 3, content of tab 3 show
    fireEvent.click(screen.getByText("ITEM 3"));
    tabPanelContent = screen.getByText("Content of tab 3");
    expect(tabPanelContent).toBeInTheDocument();
  });

  it(`tab got focus when user press right arrow key`, () => {
    render(<SimpleTabGroup />);

    // press right arrow on tab 1, tab 2 will have focus
    userEvent.type(screen.getByText("ITEM 1"), "{arrowright}");
    expect(screen.getByText("ITEM 2")).toHaveFocus();

    // press right arrow on tab 2, tab 3 will have focus
    userEvent.type(screen.getByText("ITEM 2"), "{arrowright}");
    expect(screen.getByText("ITEM 3")).toHaveFocus();

    // press right arrow on tab 3, tab 1 will have focus
    userEvent.type(screen.getByText("ITEM 3"), "{arrowright}");
    expect(screen.getByText("ITEM 1")).toHaveFocus();
  });

  it("tab got focus when user press left arrow key", () => {
    render(<SimpleTabGroup />);

    // tab 1 has focus so when press arrow left, tab 3 will have focus
    userEvent.keyboard("{arrowleft}");
    expect(screen.getByText("ITEM 3")).toHaveFocus();

    // tab 3 has focus, when press arrow left, tab 2 will have focus
    userEvent.keyboard("{arrowleft}");
    expect(screen.getByText("ITEM 2")).toHaveFocus();

    // tab 2 has focus, when press arrow left, tab 1 will have focus
    userEvent.keyboard("{arrowleft}");
    expect(screen.getByText("ITEM 1")).toHaveFocus();
  });

  it("select tab by arrow key then press enter, content of the tab will be shown", () => {
    render(<SimpleTabGroup />);

    // press right arrow on tab 1, tab 2 will have focus
    userEvent.type(screen.getByText("ITEM 1"), "{arrowright}");
    expect(screen.getByText("ITEM 2")).toHaveFocus();

    // type enter, content of tab 2 shown
    userEvent.keyboard("{enter}");
    expect(screen.getByText("Content of tab 2")).toBeInTheDocument();
  });
});
