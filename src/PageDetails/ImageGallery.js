import './ImageGallery.css';

export default function ImageGallery(props) {
  const images = props.images.filter(e => e.type !== 'banner' && e.resolutions.original);
  return (
    <div className="imagegallery" data-testid="ImageGallery">
      { images.map((img, index) => (
        <div className="imagegallery__thumbnail" key={index}>
          <a href={ img.resolutions.original.url } target="_blank" rel="noreferrer">
            <img className="imagegallery__img" src={ img.resolutions.original.url } alt="" />
          </a>
        </div>
      )) }
    </div>
  );
}