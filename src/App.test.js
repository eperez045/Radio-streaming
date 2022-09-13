import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search bar', () => {
  render(<App />);
  const linkElement = screen.getByRole('search');
  expect(linkElement).toBeInTheDocument();
});

test('renders buscar text', () => {
  render(<App />);
  const linkElement = screen.getByText(/buscar/i);
  expect(linkElement).toBeInTheDocument();
});
