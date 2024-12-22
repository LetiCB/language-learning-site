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
    const title = screen.getByText(defaultProps.title);
    expect(title).toBeInTheDocument();
  });

  it("should render the subtitle when provided", () => {
    const subtitle = screen.getByText(defaultProps.subtitle);
    expect(subtitle).toBeInTheDocument();
  });

  it("should render the description when provided", () => {
    const description = screen.getByText(defaultProps.description);
    expect(description).toBeInTheDocument();
  });

  it("should render the image when provided", () => {
    const image = screen.getByAltText(defaultProps.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.image);
  });

  it("should call onClick when the card is clicked", () => {
    const card = screen.getByRole("button");
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should have accessible elements", () => {
    const title = screen.getByText(defaultProps.title);
    expect(title).toHaveAccessibleName();
  });

  it("should be accessible with keyboard interactions", () => {
    const card = screen.getByRole("button");

    card.focus();
    expect(card).toHaveFocus();

    fireEvent.keyDown(card, { key: "Enter" });
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(card, { key: " " });
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
        const title = screen.getByText(defaultProps.title);
        expect(title).toBeInTheDocument();
    });
  
    it("should render the component without the subtitle if not provided", () => {
      const subtitle = screen.queryByText(defaultProps.subtitle);
      expect(subtitle).not.toBeInTheDocument();
    });
  
    it("should render the component without the description if not provided", () => {
      const description = screen.queryByText(defaultProps.description);
      expect(description).not.toBeInTheDocument();
    });
  
    it("should render the component without the image if not provided", () => {
      const image = screen.queryByAltText(defaultProps.title);
      expect(image).not.toBeInTheDocument();
    });
  
    it("should call onClick when the card is clicked", () => {
      const card = screen.getByRole("button");
      fireEvent.click(card);
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });
  