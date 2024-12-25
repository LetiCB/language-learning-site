/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component tests", () => {
    beforeEach(() => {
        render(<Footer />);
    });

    afterEach(() => {
        cleanup();
    });

    it("should render the copyright text with the current year", () => {
        const currentYear = new Date().getFullYear();
        const copyrightText = screen.getByText(`© ${currentYear} Aprende idiomas. Todos los derechos reservados.`);
        expect(copyrightText).toBeInTheDocument();
    });

    it("should have the role contentinfo for accessibility", () => {
        const role = screen.getByRole("contentinfo");
        expect(role).toBeInTheDocument();
    });

    it("should render the children correctly", () => {
        cleanup();
        render(<Footer>Test Children</Footer>);
        const children = screen.getByText("Test Children");
        expect(children).toBeInTheDocument();
    });
});
