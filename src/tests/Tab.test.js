import Tab from "../components/tabs/Tab";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Tab component", () => {
  it("Render active tab correctly including WAI ARIA", () => {
    const mockOnClick = jest.fn();
    render(
      <Tab label="A Tab" value="tab1" active={true} onClick={mockOnClick} />
    );

    // element rendered correctly
    const tab = screen.getByText("A Tab");
    expect(tab).toBeInTheDocument();
    expect(tab.getAttribute("role")).toEqual("tab");
    expect(tab.getAttribute("id")).toEqual("tab1");
    // active tab so tabindex is 0
    expect(tab.getAttribute("tabindex")).toEqual("0");
    expect(tab.getAttribute("value")).toEqual("tab1");

    // click on tab the handler will be called
    fireEvent.click(tab);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Render inactive tab correctly including WAI ARIA", () => {
    const mockOnClick = jest.fn();
    render(
      <Tab label="A Tab" value="tab1" active={false} onClick={mockOnClick} />
    );

    // element rendered correctly
    const tab = screen.getByText("A Tab");
    expect(tab).toBeInTheDocument();
    expect(tab.getAttribute("role")).toEqual("tab");
    expect(tab.getAttribute("id")).toEqual("tab1");
    // active tab so tabindex is -1
    expect(tab.getAttribute("tabindex")).toEqual("-1");
    expect(tab.getAttribute("value")).toEqual("tab1");

    // click on tab the handler will be called
    fireEvent.click(tab);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
