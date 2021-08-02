import ShowThumbnail from './ShowThumbnail';
import './ShowList.css';

export default function ShowList(props) {
  if (!props.shows.length) return (<p>No results.</p>);

  return (
    <div className="showlist">
      { props.shows.map((show, index) => (
        <ShowThumbnail key={ index } show={ show.show } />
      )) }
    </div>
  );
}
