import { render, screen } from '@testing-library/react';
import App from './App';

it('renders header logo', () => {
  render(<App />);
  const el = screen.getByAltText(/dmiflix/i);
  expect(el).toBeInTheDocument();
});

it('renders home page', () => {
  render(<App />);
  const el = screen.getByTestId('PageHome');
  expect(el).toBeInTheDocument();
});

it('renders footer', () => {
  render(<App />);
  const el = screen.getByText('Leandro Barone');
  expect(el).toBeInTheDocument();
});