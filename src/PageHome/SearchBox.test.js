import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import SearchBox from './SearchBox';

it('renders search button', () => {
  render(<StateContextProvider><MemoryRouter><SearchBox /></MemoryRouter></StateContextProvider>);
  const el = screen.getByText('Search');
  expect(el).toBeInTheDocument();
});
