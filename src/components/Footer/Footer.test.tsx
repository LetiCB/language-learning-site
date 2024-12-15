/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
    beforeEach(() => {
        render(<Footer />);
    });

    afterEach(() => {
        cleanup();
    });

    it("renders the copyright text with the current year", () => {
        const CURRENT_YEAR = new Date().getFullYear();
        const COPYRIGHT_TEXT = screen.getByText(`© ${CURRENT_YEAR} Aprende idiomas. Todos los derechos reservados.`);
        expect(COPYRIGHT_TEXT).toBeInTheDocument();
    });

    it("has the role contentinfo for accessibility", () => {
        const ROLE = screen.getByRole("contentinfo");
        expect(ROLE).toBeInTheDocument();
    });

    it("renders the children correctly", () => {
        cleanup();
        render(<Footer>Test Children</Footer>);
        const CHILDREN = screen.getByText("Test Children");
        expect(CHILDREN).toBeInTheDocument();
    });
});
