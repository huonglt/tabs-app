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
});
