import { render, screen } from '@testing-library/react';
import App from './App';

test('Lion Wins', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lion Wins/i);
  expect(linkElement).toBeInTheDocument();
});
