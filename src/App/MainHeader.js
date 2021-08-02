import { Link } from 'react-router-dom';
import './MainHeader.css';
import logo from '../_media/logo.png';

export default function MainHeader() {
	return (
		<header className="mainheader p-4">
			<Link to="/"><img src={logo} className="mainheader__logo" alt="DMIFlix" /></Link>
		</header>
	)
}
