/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector Component", () => {
  const languageChangeMock = jest.fn();
  const languagesMock = ["English", "Spanish", "French"];

  beforeEach(() => {
    render(
      <LanguageSelector
        selectedLanguage={languagesMock[0]}
        languages={languagesMock}
        onLanguageChange={languageChangeMock}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the selected language", () => {
    const selectedLanguage = screen.getByText("English");
    expect(selectedLanguage).toBeInTheDocument();
  });

  it("should render the dropdown chevron", () => {
    const chevron = screen.getByText("▼");
    expect(chevron).toBeInTheDocument();
  });


  it("should not show the dropdown menu", () => {
    const dropdownComponent = screen.queryByRole("list");
    expect(dropdownComponent).not.toBeInTheDocument();
  });

  it("should toggle the dropdown menu on click", () => {
    const language = screen.getByText("English");
    const { parentElement } = language;
    const languageSelector = parentElement as HTMLElement;  

    fireEvent.click(languageSelector);
    const dropdownComponent = screen.getByRole("list");
    expect(dropdownComponent).toBeInTheDocument();

    fireEvent.click(languageSelector);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should display all languages in the dropdown menu when open", () => {
    const language = screen.getByText("English");
    const { parentElement } = language;
    const languageSelector = parentElement as HTMLElement; 

    fireEvent.click(languageSelector);

    const englishOption = screen.queryAllByText(languagesMock[0]);
    expect(englishOption).toBeTruthy();

    const spanishOption = screen.getByText(languagesMock[1]);
    expect(spanishOption).toBeInTheDocument();

    const frenchOption = screen.getByText(languagesMock[2]);
    expect(frenchOption).toBeInTheDocument();
  });

  it("should call onLanguageChange and closes the dropdown when a language is selected", () => {
    const language = screen.getByText("English");
    const { parentElement } = language;
    const languageSelector = parentElement as HTMLElement; 

    fireEvent.click(languageSelector);

    const spanishOption = screen.getByText("Spanish");
    fireEvent.click(spanishOption);

    expect(languageChangeMock).toHaveBeenCalledWith("Spanish");
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("should not call onLanguageChange when clicking outside of dropdown", () => {
    fireEvent.click(document.body);

    expect(languageChangeMock).not.toHaveBeenCalled();
  });
});
