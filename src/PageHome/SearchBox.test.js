import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import SearchBox from './SearchBox';

it('renders search button', () => {
  render(<StateContextProvider><MemoryRouter><SearchBox /></MemoryRouter></StateContextProvider>);
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});

it('uses props as default value for textbox', () => {
  render(<StateContextProvider><MemoryRouter><SearchBox keywords='something' /></MemoryRouter></StateContextProvider>);
  const el = screen.getByDisplayValue('something');
  expect(el).toBeInTheDocument();
});