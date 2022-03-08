import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("left panel shows correctly", () => {
    render(<App />);
    expect(screen.getByText("Simple Tab Group")).toBeInTheDocument();
    expect(screen.getByText("Multi Tab Groups")).toBeInTheDocument();
    expect(screen.getByText("Tab Group With Link To Tab")).toBeInTheDocument();
  });

  it("right panel will show simple tab group example", () => {
    render(<App />);
    expect(screen.getByText("Simple Tab Group Example")).toBeInTheDocument();
    expect(screen.getByText("ITEM 1")).toBeInTheDocument();
    expect(screen.getByText("ITEM 2")).toBeInTheDocument();
    expect(screen.getByText("ITEM 3")).toBeInTheDocument();
    expect(screen.getByText("Content of tab 1")).toBeInTheDocument();
  });

  it("click Multi Tab Groups option, multi tab groups will show", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Multi Tab Groups"));
    expect(screen.getByText("Multi Tab Groups Example")).toBeInTheDocument();

    expect(screen.getByText("Multi Tab Groups Example")).toBeInTheDocument();

    // tab group A shown correctly
    expect(screen.getByText("GROUP A - ITEM 1")).toBeInTheDocument();
    expect(screen.getByText("GROUP A - ITEM 2")).toBeInTheDocument();
    expect(screen.getByText("GROUP A - ITEM 3")).toBeInTheDocument();
    expect(screen.getByText("Tab Group A")).toBeInTheDocument();
    expect(screen.getByText("Content of Item 1")).toBeInTheDocument();

    // tab group B shown correctly
    expect(screen.getByText("GROUP B - TAB 1")).toBeInTheDocument();
    expect(screen.getByText("GROUP B - TAB 2")).toBeInTheDocument();
    expect(screen.getByText("GROUP B - TAB 3")).toBeInTheDocument();
    expect(screen.getByText("Tab Group B")).toBeInTheDocument();
    expect(screen.getByText("Content of Tab 1")).toBeInTheDocument();
  });
});
