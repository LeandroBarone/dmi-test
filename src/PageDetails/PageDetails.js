import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../StateContext/StateContext';
import { getShow } from '../Api/Api';
import ShowDetails from './ShowDetails';
import Spinner from '../Spinner/Spinner';

export default function PageDetails() {
  const { paramShowId } = useParams();
  const [ globalState, setGlobalState ] = useContext(StateContext);

  function doSearch(showId) {
    if (globalState.showId === showId) return;

    setGlobalState({ isLoading: true, showId });
  
    getShow(showId)
    .then(data => {
      setGlobalState({isLoading: false, show: data});
    })
    .catch(e => {
      setGlobalState({isLoading: false, error: e});
      console.log(e);
    });
  }

  useEffect(() => doSearch(paramShowId));

  if (globalState.isLoading || !globalState.show) return (<Spinner />);

  return (
    <ShowDetails show={ globalState.show } linkBack={ (globalState.keywords) ? '/'+globalState.keywords : '/' } />
  )
}
