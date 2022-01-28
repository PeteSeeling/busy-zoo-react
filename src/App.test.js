import { render, screen } from '@testing-library/react';
import App from './App';

test('Lion', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lion/i);
  expect(linkElement).toBeInTheDocument();
});
