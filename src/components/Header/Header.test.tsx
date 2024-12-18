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

    it("should render the default branding", () => {
        const DEFAULT_BRANDING = screen.getByText(/Aprendamos/i);
        expect(DEFAULT_BRANDING).toBeInTheDocument();
    });

    it("should render the children correctly", () => {
        const CHILDREN = screen.getByText("Test Children");
        expect(CHILDREN).toBeInTheDocument();
    });

    it("should have the role banner for accessibility", () => {
        const ROLE = screen.getByRole("banner");
        expect(ROLE).toBeInTheDocument();
    });
});
