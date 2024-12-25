/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import LyricsSection from "./LyricsSection";

const mockSong = {
  id: 1,
  language: "Inglés",
  artist: "Artist Mock",
  title: "Song Mock",
  url: "https://url-mock.com",
  lyrics: [
    { line: "First line mock", options: ["option1", "option2", "option3"] },
    { line: "Second line mock", options: ["correct", "incorrect", "incorrect2"] },
    { line: "Third line mock", options: ["correctA", "incorrectB", "incorrectC"] },
    { line: "Fourth line mock", options: ["optionA", "optionB", "optionC"] }
  ],
};

describe("LyricsSection Component tests for easy difficulty", () => {
  beforeEach(() => {
    render(<LyricsSection song={mockSong} difficulty="easy" />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render song lines correctly", () => {
    const firstLine = screen.getByText(/first line mock/i);
    const secondLine = screen.getByText(/second line mock/i);
    expect(firstLine).toBeInTheDocument();
    expect(secondLine).toBeInTheDocument();
  });

  it("should render 3 buttons per line for 'easy' difficulty", () => {
    const firstLineOption1 = screen.getByRole('button', {
        name: /option1/i
      });
    const firstLineOption2 = screen.getByRole('button', {
        name: /option2/i
      });
      const firstLineOption3 = screen.getByRole('button', {
        name: /option3/i
      });
    expect(firstLineOption1).toBeInTheDocument();
    expect(firstLineOption2).toBeInTheDocument();
    expect(firstLineOption3).toBeInTheDocument();
  });

  it("should not render any input field", () => {
    const input = screen.queryByRole('textbox');
    expect(input).not.toBeTruthy();
  });

  it("should render 2 buttons to verify answers and to reset", () => {
    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    const resetButton = screen.getByRole('button', {
        name: /resetear/i
      });
    expect(verifyAnswerButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it("should display 3 buttons per line and the reset and verify answer buttons", () => {
    const totalButtons = (mockSong.lyrics.length * mockSong.lyrics[0].options.length) + 2;
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(totalButtons);
  });

  it("should display a modal with results", () => {
    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);

    const modal = screen.getByRole("dialog") as HTMLElement;
    expect(modal).toBeInTheDocument();

    const result = screen.getByText("Obtuviste un 0%!");
    expect(result).toBeInTheDocument();
  });
});

describe("LyricsSection Component tests for hard difficulty", () => {
  beforeEach(() => {
    render(<LyricsSection song={mockSong} difficulty="hard" />);
  });
   
  afterEach(() => {
    cleanup();
  });

  it("should render song lines correctly", () => {
    const firstLine = screen.getByText(/first line mock/i);
    const secondLine = screen.getByText(/second line mock/i);
    expect(firstLine).toBeInTheDocument();
    expect(secondLine).toBeInTheDocument();
  });
   
  it("should render 2 buttons to verify answers and to reset", () => {
    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    const resetButton = screen.getByRole('button', {
        name: /resetear/i
      });
    expect(verifyAnswerButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
  
  it("should display 3 input fields per line and the reset and verify answer buttons", () => {
    const totalInputs = (mockSong.lyrics.length);
    const totalButtons = 2;
    const inputs = screen.getAllByRole('textbox');
    const buttons = screen.getAllByRole('button');
    expect(inputs).toHaveLength(totalInputs);
    expect(buttons).toHaveLength(totalButtons);
  });

  it("should allow letters to be inputted", () => {
    const input = screen.getAllByRole('textbox')[0];
    fireEvent.change(input, { target: { value: "Answer Mock" } });
    expect(input).toHaveValue("Answer Mock");
  });

  it("should provide feedback after verifying answers", () => {
    const input = screen.getAllByRole('textbox')[0];
    const correctOption = mockSong.lyrics[0].options[0];
    fireEvent.change(input, { target: { value: correctOption } });
    expect(input).toHaveValue(correctOption);

    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);
    const feedback = screen.getByText("✔ ¡Muy bien!");
    expect(feedback).toBeInTheDocument();
  });

  it("should display a modal with results", () => {
    const input = screen.getAllByRole('textbox')[0];
    const correctOption = mockSong.lyrics[0].options[0];
    fireEvent.change(input, { target: { value: correctOption } });
    expect(input).toHaveValue(correctOption);

    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);

    const modal = screen.getByRole("dialog") as HTMLElement;
    expect(modal).toBeInTheDocument();

    const result = screen.getByText("Obtuviste un 25%!");
    expect(result).toBeInTheDocument();
  });

  it("should reset answers correctly", () => {
    const input = screen.getAllByRole('textbox')[0];
    const correctOption = mockSong.lyrics[0].options[0];
    fireEvent.change(input, { target: { value: correctOption } });
    expect(input).toHaveValue(correctOption);

    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);
    const feedback = screen.getByText("✔ ¡Muy bien!");
    expect(feedback).toBeInTheDocument();

    const resetButton = screen.getByRole('button', {
        name: /resetear/i
      });
    fireEvent.click(resetButton);
    const positiveFeedback = screen.queryByText("✔ ¡Muy bien!");
    expect(positiveFeedback).not.toBeTruthy();
  });

  it("should show feedback for wrong answers", () => {
    const input = screen.getAllByRole('textbox')[0];
    const incorrectOption = mockSong.lyrics[0].options[0];
    fireEvent.change(input, { target: { value: incorrectOption } });
    expect(input).toHaveValue(incorrectOption);

    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);
    const feedback = screen.queryAllByText("✘ Sigue intentándolo!");
    expect(feedback).toBeTruthy();
  });

  it("should show feedback for empty input fields", () => {
    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);
    const wrongAnswerFeedback = screen.queryAllByText("✘ Sigue intentándolo!");
    const rightAnswerFeedback = screen.queryByText("✔ ¡Muy bien!");
    expect(wrongAnswerFeedback).toBeTruthy();
    expect(rightAnswerFeedback).not.toBeTruthy();
  });
});

describe("LyricsSection Component tests for intermediate difficulty", () => {
  beforeEach(() => {
    render(<LyricsSection song={mockSong} difficulty="intermediate" />);
  });
    
  afterEach(() => {
    cleanup();
  });

  it("should render song lines correctly", () => {
    const firstLine = screen.getByText(/first line mock/i);
    const secondLine = screen.getByText(/second line mock/i);
    expect(firstLine).toBeInTheDocument();
    expect(secondLine).toBeInTheDocument();
  });
    
  it("should render 2 buttons to verify answers and to reset", () => {
    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    const resetButton = screen.getByRole('button', {
        name: /resetear/i
      });
    expect(verifyAnswerButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it("should display a modal with results", () => {
    const verifyAnswerButton = screen.getByRole('button', {
        name: /verificar mis respuestas/i
      });
    fireEvent.click(verifyAnswerButton);

    const modal = screen.getByRole("dialog") as HTMLElement;
    expect(modal).toBeInTheDocument();

    const result = screen.getByText("Obtuviste un 0%!");
    expect(result).toBeInTheDocument();
  });
});
  