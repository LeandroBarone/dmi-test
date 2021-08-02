import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/';

export function searchShows(keywords) {
		return axios
			.get(API_URL + 'search/shows/?q=' + keywords)
			.then(res => res.data);
}

export function getShow(showId) {
		return axios
			.get(API_URL + 'shows/' + showId + '?embed=images')
			.then(res => res.data);
}
