import { render, screen } from '@testing-library/react';
import App from './App';
import { TestWrapper } from './test-utils';

test('renders the "Let\'s learn languages together!" text', () => {
  render(<TestWrapper><App /></TestWrapper>);
  expect(screen.getByText("Let's learn languages together!")).toBeInTheDocument();
});
