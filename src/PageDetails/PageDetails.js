import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../StateContext/StateContext';
import { getShow } from '../Api/Api';
import ShowDetails from './ShowDetails';
import Spinner from '../Spinner/Spinner';

export default function PageDetails() {
	const { show_id } = useParams();
	const [ state, dispatch ] = useContext(StateContext);

	function doSearch(show_id) {
		if (state.show_id === show_id) return;

		dispatch({ isLoading: true, show_id });
		getShow(show_id)
		.then(data => {
			dispatch({isLoading: false, show: data});
		})
		.catch(e => {
			dispatch({isLoading: false, error: e});
			console.log(e);
		});
	}

	useEffect(() => {
		if (show_id !== state.show_id)
			doSearch(show_id);
	});

	if (state.isLoading || !state.show) return (<Spinner />);

	return (
		<ShowDetails show={ state.show } linkBack={ (state.keywords) ? '/' + state.keywords : '/' } />
	)
}
