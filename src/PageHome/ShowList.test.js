import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import ShowList from './ShowList';

it('renders three shows', () => {
	const shows = [
		{ show: { name: 'Show 1', image: 'fake url' } },
		{ show: { name: 'Show 2', image: 'fake url' } },
		{ show: { name: 'Show 3', image: 'fake url' } },
	]
  render(<StateContextProvider><MemoryRouter><ShowList shows={ shows } /></MemoryRouter></StateContextProvider>);
  const el1 = screen.getByText('Show 1');
  const el2 = screen.getByText('Show 2');
  const el3 = screen.getByText('Show 3');
	expect(el1).toBeInTheDocument();
	expect(el2).toBeInTheDocument();
	expect(el3).toBeInTheDocument();
});

it('does not render a show without image', () => {
	const shows = [
		{ show: { name: 'Show 1', image: 'fake url' } },
		{ show: { name: 'Show 2' } },
		{ show: { name: 'Show 3', image: 'fake url' } },
	]
  render(<StateContextProvider><MemoryRouter><ShowList shows={ shows } /></MemoryRouter></StateContextProvider>);
  const el1 = screen.getByText('Show 1');
  const el2 = screen.queryByText('Show 2');
  const el3 = screen.getByText('Show 3');
	expect(el1).toBeInTheDocument();
	expect(el2).toBeFalsy();
	expect(el3).toBeInTheDocument();
});