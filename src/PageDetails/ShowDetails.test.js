import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import ShowDetails from './ShowDetails';

it('renders name, summary, premiered date, rating, type, language, genres and status', () => {
	const show = {
		name: 'Some name',
		summary: 'Some summary',
		premiered: 'Some premiered date',
		type: 'Some type',
		language: 'Some language',
		genres: ['Genre A', 'Genre B'],
		status: 'Some status',
		rating: {
			average: 9.9
		}
	}
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);

  const name = screen.getByText('Some name');
	expect(name).toBeInTheDocument();

  const summary = screen.getByText('Some summary');
	expect(summary).toBeInTheDocument();

	const premiered = screen.getByText('Some premiered date');
	expect(premiered).toBeInTheDocument();

  const type = screen.getByText('Some type');
	expect(type).toBeInTheDocument();

  const language = screen.getByText('Some language');
	expect(language).toBeInTheDocument();

  const genres = screen.getByText('Genre A, Genre B');
	expect(genres).toBeInTheDocument();

  const status = screen.getByText('Some status');
	expect(status).toBeInTheDocument();

  const rating = screen.getByText('9.9');
	expect(rating).toBeInTheDocument();
});

it('renders poster', () => {
	const show = {
		name: 'Some name',
		image: {
			original: 'Fake url'
		}
	}
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const el = screen.getByAltText('Show poster');
	expect(el).toBeInTheDocument();
});

it('renders picture gallery', () => {
	const show = {
		name: 'Some name',
		image: {
			original: 'Fake url'
		},
		_embedded: {
			images: [{
				resolutions: {
					original: {
						url: 'Fake url'
					}
				}
			}]
		}
	}
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const el = screen.getByAltText('Show picture');
	expect(el).toBeInTheDocument();
});