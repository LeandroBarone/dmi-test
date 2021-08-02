import ShowList from './ShowList';
import Spinner from '../Spinner/Spinner';

export default function SearchResults(props) {
  if (! props.state.shows || ! props.state.keywords ) return null;
  if ( props.state.isLoading ) return (<Spinner />);

  return (
    <div data-testid="SearchResults">
      <h3 className="mb-4">Search results for <strong>{ props.state.keywords }</strong></h3>
      <ShowList shows={ props.state.shows } />
    </div>
  )
}
