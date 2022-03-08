import TabGroups from "../components/sample/TabGroups";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TabGroups", () => {
  it("Tab Groups A & B render correctly", () => {
    render(<TabGroups />);

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
