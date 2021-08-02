import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from './ImageGallery';

export default function ShowDetails(props) {
	const linkBack = (props.linkBack) ? props.linkBack : '/';

	const show = props.show;

	const name = show.name || '-';
	const summary = show.summary || '-';
	const premiered = show.premiered || '-';
	const type = show.type || '-';
	const language = show.language || '-';
	const status = show.status || '-';

	const rating = (show.rating && show.rating.average) ? show.rating.average : '-';
	const genre = (show.genres) ? show.genres.join(', ') : '-';

	const image = (show.image && show.image.original) ? show.image.original : false;
	const images = (show._embedded && show._embedded.images) ? show._embedded.images : false;

	return (
		<Container>
			<Row>
				<Col className="mb-3"><Link to={ linkBack }>&laquo; Go back</Link></Col>
			</Row>
			<Row>
				<Col md="3">
					{ image && <img className="w-100 mb-4" src={ image } alt="Show poster" /> }
				</Col>
				<Col md="9">
					<h3 className="mb-3">{ name }</h3>
					<div dangerouslySetInnerHTML={{ __html: summary }}></div>
					<p>
						<strong>Premiered: </strong> <span>{ premiered }</span><br />
						<strong>Rating: </strong> <span>{ rating }</span><br />
						<strong>Type: </strong> <span>{ type }</span><br />
						<strong>Language: </strong> <span>{ language }</span><br />
						<strong>Genre(s): </strong> <span>{ genre }</span><br />
						<strong>Status: </strong> <span>{ status }</span><br />
					</p>
					<h4 className="mt-4 mb-3">Pictures</h4>
					{ images && <ImageGallery images={ images } /> }
				</Col>
			</Row>
		</Container>
	);
}