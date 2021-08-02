import { useRef, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { StateContext } from '../StateContext/StateContext';
import { searchShows } from '../Api/Api';
import './SearchBox.css';

export default function SearchBox(props) {
  const history = useHistory();
  const textbox = useRef(null);
  const [ state, dispatch ] = useContext(StateContext);

  const doSearch = (keywords) => {
    if (state.keywords === keywords) return;
    
    if (!keywords) {
      dispatch({keywords: keywords, shows: []});
      return;
    }

    dispatch({ isLoading: true, keywords });
    searchShows(keywords)
    .then(data => {
      dispatch({isLoading: false, shows: data});
    })
    .catch(e => {
      dispatch({isLoading: false, error: e});
      console.log(e);
    });
  }

  useEffect(() => doSearch(props.keywords));
  
  const handleSubmit = ev => {
    ev.preventDefault();
    history.push('/' + textbox.current.value);
  };

  return (
    <form className="searchbox mb-4" onSubmit={ handleSubmit } data-testid="SearchBox">
      <input className="searchbox__input" placeholder="Search TV show by title" ref={ textbox } defaultValue={ props.keywords } />
      <button type="submit" className="searchbox__btn">Search</button>
    </form>
  );
}
