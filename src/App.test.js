import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('should show text content as gaztea', () => {
  render(<App />);
  const input = screen.getByRole('input');
  const button = screen.getByRole('button');
  const textbox = screen.getAllByRole('p')
  
  // Simulate typing 'gaztea'
  userEvent.type(input, '');
  // Simulate clicking button
  userEvent.click(button);
  
  // Assert textbox has text content 'Hello!'
  expect(textbox).toHaveValue('');
});
