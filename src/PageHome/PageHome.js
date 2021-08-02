import { useContext } from 'react';
import { useParams } from "react-router-dom";
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import { StateContext } from '../StateContext/StateContext';

export default function PageHome() {
  const { keywords } = useParams();
  const [ state ] = useContext(StateContext);

  return (
    <section data-testid="PageHome">
      <SearchBox keywords={ keywords } />
      <SearchResults state={ state } />
    </section>
  )
}
