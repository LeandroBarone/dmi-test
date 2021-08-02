import { searchShows, getShow } from './Api';

it('searches shows using external API', async () => {
  const res = await searchShows('girls');
  expect(res.length).toBeGreaterThan(0);
});

it('retrieves a single show using external API', async () => {
  const res = await getShow(139);
  expect(res).toHaveProperty('name');
});
