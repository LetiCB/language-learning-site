/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { TestWrapper } from './test-utils';

describe("App Component", () => {
    beforeEach(() => {
        render(
            <TestWrapper>
                <App />
            </TestWrapper>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should render the header component', () => {
      const HEADER = screen.getByRole("banner");
      expect(HEADER).toBeInTheDocument();
    });

    it('should render the main content section', () => {
      const mainContent = screen.getByRole('main');
      expect(mainContent).toBeInTheDocument();
    });

    it('should render the footer component', () => {
      const FOOTER = screen.getByRole("contentinfo");
      expect(FOOTER).toBeInTheDocument();
    });
});
