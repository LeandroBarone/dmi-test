import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StateContextProvider from '../StateContext/StateContext';
import ShowDetails from './ShowDetails';

const show = {
  name: 'Some name',
  summary: 'Some summary',
  premiered: 'Some premiered date',
  type: 'Some type',
  language: 'Some language',
  status: 'Some status',
  genres: ['Genre A', 'Genre B'],
  rating: {
    average: 9.9
  },
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

it('renders poster', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const el = screen.getByAltText('Show poster');
  expect(el).toBeInTheDocument();
});

it('renders name', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const name = screen.getByText('Some name');
  expect(name).toBeInTheDocument();
});

it('renders summary', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const summary = screen.getByText('Some summary');
  expect(summary).toBeInTheDocument();
});

it('renders premiered date', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const premiered = screen.getByText('Some premiered date');
  expect(premiered).toBeInTheDocument();
});

it('renders type', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const type = screen.getByText('Some type');
  expect(type).toBeInTheDocument();
});

it('renders language', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const language = screen.getByText('Some language');
  expect(language).toBeInTheDocument();
});

it('renders genres', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const genres = screen.getByText('Genre A, Genre B');
  expect(genres).toBeInTheDocument();
});

it('renders status', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const status = screen.getByText('Some status');
  expect(status).toBeInTheDocument();
});

it('renders picture gallery', () => {
  render(<StateContextProvider><MemoryRouter><ShowDetails show = { show } /></MemoryRouter></StateContextProvider>);
  const el = screen.getByTestId('ImageGallery');
  expect(el).toBeInTheDocument();
});
