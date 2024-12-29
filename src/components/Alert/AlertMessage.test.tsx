import React from "react";
import { render, screen } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

describe("AlertMessage Component tests", () => {
  jest.useFakeTimers();

  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it("should render the message correctly", () => {
    render(<AlertMessage message="Operation successful!" type="success" onClose={mockOnClose} />);
    expect(screen.getByText("Operation successful!")).toBeInTheDocument();
  });

  it("should apply the correct styles based on the type (success)", () => {
    render(<AlertMessage message="Operation successful!" type="success" onClose={mockOnClose} />);
    const alert = screen.getByText("Operation successful!");
    expect(alert).toHaveStyle("background-color: rgb(212, 237, 218)"); 
  });

  it("should apply the correct styles based on the type (error)", () => {
    render(<AlertMessage message="Something went wrong" type="error" onClose={mockOnClose} />);
    const alert = screen.getByText("Something went wrong");
    expect(alert).toHaveStyle("background-color: rgb(248, 215, 218);"); 
  });

  it("should call onClose after 3 seconds", () => {
    render(<AlertMessage message="Operation successful!" type="success" onClose={mockOnClose} />);

    jest.advanceTimersByTime(3000);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should clean up the timeout on unmount", () => {
    const { unmount } = render(
      <AlertMessage message="Operation successful!" type="success" onClose={mockOnClose} />
    );

    unmount();

    jest.advanceTimersByTime(3000);

    expect(mockOnClose).not.toHaveBeenCalled();
  });
});
