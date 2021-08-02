import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import PageHome from './PageHome';

it('renders searchbox', () => {
  render(<StateContextProvider><MemoryRouter><PageHome /></MemoryRouter></StateContextProvider>);
  const SearchBox = screen.getByTestId('SearchBox');
	expect(SearchBox).toBeInTheDocument();
});

it('does not render searchresults because state.keywords does not exist', () => {
  render(<StateContextProvider><MemoryRouter><PageHome /></MemoryRouter></StateContextProvider>);
  const SearchResults = screen.queryByTestId('SearchResults');
	expect(SearchResults).toBeFalsy();
});
