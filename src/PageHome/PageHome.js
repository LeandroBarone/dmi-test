import { useContext } from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import { StateContext } from '../StateContext/StateContext';

export default function PageHome() {
  const [ globalState ] = useContext(StateContext);

  return (
    <section data-testid="PageHome">
      <SearchBox />
      <SearchResults isLoading={ globalState.isLoading } keywords={ globalState.keywords } shows={ globalState.shows } />
    </section>
  )
}
