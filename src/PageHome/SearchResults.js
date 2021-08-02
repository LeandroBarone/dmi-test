import ShowList from './ShowList';
import Spinner from '../Spinner/Spinner';

export default function SearchResults(props) {
  if (! props.shows || ! props.keywords ) return null;
  if ( props.isLoading ) return (<Spinner />);

  return (
    <div data-testid="SearchResults">
      <h3 className="mb-4">Search results for <strong>{ props.keywords }</strong></h3>
      <ShowList shows={ props.shows } />
    </div>
  )
}
