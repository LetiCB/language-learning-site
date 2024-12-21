/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Card from "./Card";

const mockOnClick = jest.fn();

const defaultProps = {
  image: "https://mocked-url.com/150",
  title: "Card Title Mock",
  subtitle: "Card Subtitle Mock",
  description: "Card Description Mock",
  onClick: mockOnClick,
};

describe("Card Component tests", () => {
  beforeEach(() => {
    render(
      <Card
        image={defaultProps.image}
        title={defaultProps.title}
        subtitle={defaultProps.subtitle}
        description={defaultProps.description}
        onClick={defaultProps.onClick}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the title", () => {
    const TITLE = screen.getByText(defaultProps.title);
    expect(TITLE).toBeInTheDocument();
  });

  it("should render the subtitle when provided", () => {
    const SUBTITLE = screen.getByText(defaultProps.subtitle);
    expect(SUBTITLE).toBeInTheDocument();
  });

  it("should render the description when provided", () => {
    const DESCRIPTION = screen.getByText(defaultProps.description);
    expect(DESCRIPTION).toBeInTheDocument();
  });

  it("should render the image when provided", () => {
    const IMAGE = screen.getByAltText(defaultProps.title);
    expect(IMAGE).toBeInTheDocument();
    expect(IMAGE).toHaveAttribute("src", defaultProps.image);
  });

  it("should call onClick when the card is clicked", () => {
    const CARD = screen.getByRole("button");
    fireEvent.click(CARD);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should have accessible elements", () => {
    const TITLE = screen.getByText(defaultProps.title);
    expect(TITLE).toHaveAccessibleName();
  });

  it("should be accessible with keyboard interactions", () => {
    const CARD = screen.getByRole("button");

    CARD.focus();
    expect(CARD).toHaveFocus();

    fireEvent.keyDown(CARD, { key: "Enter" });
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(CARD, { key: " " });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });
});

describe("Card Component tests with missing props", () => {
    beforeEach(() => {
      render(
        <Card
          title={defaultProps.title}
        />
      );
    });
  
    afterEach(() => {
      cleanup();
    });

    it("should render the title", () => {
        const TITLE = screen.getByText(defaultProps.title);
        expect(TITLE).toBeInTheDocument();
    });
  
    it("should render the component without the subtitle if not provided", () => {
      const SUBTITLE = screen.queryByText(defaultProps.subtitle);
      expect(SUBTITLE).not.toBeInTheDocument();
    });
  
    it("should render the component without the description if not provided", () => {
      const DESCRIPTION = screen.queryByText(defaultProps.description);
      expect(DESCRIPTION).not.toBeInTheDocument();
    });
  
    it("should render the component without the image if not provided", () => {
      const IMAGE = screen.queryByAltText(defaultProps.title);
      expect(IMAGE).not.toBeInTheDocument();
    });
  
    it("calls onClick when the card is clicked", () => {
      const CARD = screen.getByRole("button");
      fireEvent.click(CARD);
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });
  