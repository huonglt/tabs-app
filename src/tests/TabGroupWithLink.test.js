import TabGroupWithLink from "../components/sample/TabGroupWithLink";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TabGroupWithLink", () => {
  it("Content correct and when click the link, tab 2 will be selected & its content wil be shown", () => {
    render(<TabGroupWithLink />);

    // tabs shown correct
    expect(screen.getByText("ITEM 1")).toBeInTheDocument();
    expect(screen.getByText("ITEM 2")).toBeInTheDocument();
    expect(screen.getByText("ITEM 3")).toBeInTheDocument();

    // tab panel show content of tab 1
    expect(screen.getByText("Content of tab 1")).toBeInTheDocument();

    // the link exist
    const link = screen.getByText("Click to open tab 2");
    expect(link).toBeInTheDocument();

    // when click the link tab 2 will be selected, and its content shown
    fireEvent.click(link);
    expect(screen.getByText("Content of tab 2")).toBeInTheDocument();
    const tab2 = screen.getByText("ITEM 2");
    expect(tab2.getAttribute("tabindex")).toEqual("0");
  });
});
