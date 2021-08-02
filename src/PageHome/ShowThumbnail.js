import { Link } from 'react-router-dom';

export default function ShowThumbnail(props) {
  if (!props.show.image) return null;
  return (
    <Link className="showlist__thumbnail" to={ '/details/' + props.show.id }>
      <img src={ props.show.image.medium } alt={ props.show.name } className="showlist__img" />
      <aside className="showlist__name">{ props.show.name }</aside>
    </Link>
  );
}
