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
        const defaultBranding = screen.getByText(/Aprendamos/i);
        expect(defaultBranding).toBeInTheDocument();
    });

    it("should render the children correctly", () => {
        const children = screen.getByText("Test Children");
        expect(children).toBeInTheDocument();
    });

    it("should have the role banner for accessibility", () => {
        const role = screen.getByRole("banner");
        expect(role).toBeInTheDocument();
    });
});
