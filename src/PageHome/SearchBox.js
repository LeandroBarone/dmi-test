import { useRef, useContext, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { StateContext } from '../StateContext/StateContext';
import { searchShows } from '../Api/Api';
import './SearchBox.css';

export default function SearchBox() {
  const { paramKeywords } = useParams();
  const history = useHistory();
  const textbox = useRef(null);
  const [ globalState, setGlobalState ] = useContext(StateContext);

  const doSearch = (keywords) => {
    if (globalState.keywords === keywords) return;
    
    if (!keywords) {
      setGlobalState({keywords: keywords, shows: []});
      return;
    }

    setGlobalState({ isLoading: true, keywords });
    searchShows(keywords)
    .then(data => {
      setGlobalState({isLoading: false, shows: data});
    })
    .catch(e => {
      setGlobalState({isLoading: false, error: e});
      console.log(e);
    });
  }

  useEffect(() => doSearch(paramKeywords));
  
  const handleSubmit = ev => {
    ev.preventDefault();
    history.push('/' + textbox.current.value);
  };

  return (
    <form className="searchbox mb-4" onSubmit={ handleSubmit } data-testid="SearchBox">
      <input className="searchbox__input" placeholder="Search TV show by title" ref={ textbox } defaultValue={ paramKeywords } />
      <button type="submit" className="searchbox__btn">Search</button>
    </form>
  );
}
