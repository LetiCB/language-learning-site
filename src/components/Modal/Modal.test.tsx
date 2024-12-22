/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component tests", () => {
  const mockOnClose = jest.fn();
  const mockPrimaryAction = jest.fn();
  const mockSecondaryAction = jest.fn();

  beforeEach(() => {
    render(
      <Modal
        title="Test Title Mock"
        message="Test Message Mock"
        primaryButtonText="Primary Button Mock"
        primaryButtonOnClick={mockPrimaryAction}
        secondaryButtonText="Secondary Button Mock"
        secondaryButtonOnClick={mockSecondaryAction}
        onClose={mockOnClose}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the title correctly", () => {
    const title = screen.getByRole('heading', {
        name: /test title mock/i
      });
    expect(title).toBeInTheDocument();
  });

  it("should render the message correctly", () => {
    const message = screen.getByText(/test message mock/i);
    expect(message).toBeInTheDocument();
  });

  it("should render the primary and secondary buttons", () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent(/primary button mock/i);
    expect(buttons[1]).toHaveTextContent(/secondary button mock/i);
  });

  it("should call the primary button action when clicked", () => {
    const primaryButton = screen.getByRole('button', {
        name: /primary button mock/i
      });
    fireEvent.click(primaryButton);
    expect(mockPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("should call the secondary button action when clicked", () => {
    const secondaryButton = screen.getByRole('button', {
        name: /secondary button mock/i
      });
    fireEvent.click(secondaryButton);
    expect(mockSecondaryAction).toHaveBeenCalledTimes(1);
  });

  it("should call onClose when clicking outside the modal", () => {
    const modal = screen.getByRole("dialog");
    const { parentElement } = modal;
    const overlay = parentElement as HTMLElement;
    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should not call onClose when clicking inside the modal", () => {
    const modalContainer = screen.getByRole("dialog");
    fireEvent.click(modalContainer);
    expect(mockOnClose).not.toHaveBeenCalled();
  });  
});

describe("Modal Component with children tests", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(
      <Modal onClose={mockOnClose}>
        <p>Child Content Mock</p>
      </Modal>
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("should render children elements when passed", () => {
        const children = screen.getByText(/child content mock/i) as HTMLElement;
        expect(children).toBeInTheDocument();
      });

    it("should not render any title when not passed", () => {
      const title = screen.queryByRole('heading');
      expect(title).not.toBeInTheDocument();
    });
    
    it("should not render any message when not passed", () => {
      const message = screen.queryByText(/test message mock/i);
      expect(message).not.toBeInTheDocument();
    });
    
    it("should not render any buttons when not passed", () => {
      const buttons = screen.queryByRole('button');
      expect(buttons).not.toBeInTheDocument();
    });
}); 
