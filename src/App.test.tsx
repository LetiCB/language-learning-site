import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the "Let\'s learn languages!" text', () => {
  render(<App />);
  expect(screen.getByText("Let's learn languages!")).toBeInTheDocument();
});
