/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import FloatingVideo from "./FloatingVideo";

describe("FloatingVideo Component tests", () => {
  const defaultVideoId = "dQw4w9WgXcQ";

  beforeEach(() => {
    render(<FloatingVideo videoId={defaultVideoId} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the video iframe with the correct src", () => {
    const iFrame = screen.getByTitle("YouTube video player");
    expect(iFrame).toBeInTheDocument();
    expect(iFrame).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${defaultVideoId}?autoplay=1&rel=0&modestbranding=1`
    );
  });

  it("should apply initial position styles correctly", () => {
    const video = screen.getByTitle("YouTube video player");
    expect(video).toBeInTheDocument();
  
    const { parentElement } = video;
    const videoContainer = parentElement;
    expect(videoContainer).not.toBeNull();
    expect(videoContainer).toHaveStyle({ top: "150px", left: "50px" });
  });

  it("should not remain in the initial position after being dragged", () => {
    const video = screen.getByTitle("YouTube video player");
    const { parentElement} = video;
    const videoContainer = parentElement as HTMLElement;

    fireEvent.mouseDown(videoContainer, { clientX: 60, clientY: 160 });

    fireEvent.mouseMove(document, { clientX: 100, clientY: 200 });

    fireEvent.mouseUp(document);

    expect(videoContainer).not.toHaveStyle({ top: "150px", left: "50px" });
  });

  it("shoud add the 'dragging' class while being dragged", () => {
    const video = screen.getByTitle("YouTube video player")
    const { parentElement} = video;
    const videoContainer = parentElement as HTMLElement;

    fireEvent.mouseDown(videoContainer, { clientX: 60, clientY: 160 });
    expect(videoContainer).toHaveClass("dragging");

    fireEvent.mouseUp(document);
    expect(videoContainer).not.toHaveClass("dragging");
  });

  it("should clean up event listeners on unmount", () => {
    const spyAddEventListener = jest.spyOn(document, "addEventListener");
    const spyRemoveEventListener = jest.spyOn(document, "removeEventListener");

    const { unmount } = render(<FloatingVideo videoId={defaultVideoId} />);
    unmount();

    expect(spyAddEventListener).toHaveBeenCalledWith("mousemove", expect.any(Function));
    expect(spyAddEventListener).toHaveBeenCalledWith("mouseup", expect.any(Function));
    expect(spyRemoveEventListener).toHaveBeenCalledWith("mousemove", expect.any(Function));
    expect(spyRemoveEventListener).toHaveBeenCalledWith("mouseup", expect.any(Function));

    spyAddEventListener.mockRestore();
    spyRemoveEventListener.mockRestore();
  });
});
