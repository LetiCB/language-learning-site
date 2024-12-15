/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "./Header";

describe("Header Component tests", () => {
    beforeEach(() => {
        render(<Header>Test Children</Header>);
    });

    afterEach(() => {
        cleanup();
    });

    it("renders the default branding if none is provided", () => {
        const DEFAULT_BRANDING = screen.getByText(/Let's learn English/i);
        expect(DEFAULT_BRANDING).toBeInTheDocument();
    });

    it("renders the children correctly", () => {
        const CHILDREN = screen.getByText("Test Children");
        expect(CHILDREN).toBeInTheDocument();
    });

    it("has the role banner for accessibility", () => {
        const ROLE = screen.getByRole("banner");
        expect(ROLE).toBeInTheDocument();
    });

    it("renders the branding text correctly", () => {
        cleanup();
        render(<Header branding="Spanish">Test Children</Header>);
        const BRANDING_TEXT = screen.getByText(/Let's learn Spanish/i);
        expect(BRANDING_TEXT).toBeInTheDocument();
    });
});
