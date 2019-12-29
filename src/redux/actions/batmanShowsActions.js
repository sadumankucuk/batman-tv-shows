import axios from 'axios';

export function fetchBatmanShowList() {
  let url = 'http://api.tvmaze.com/search/shows?q=batman';
  return dispatch => {
    dispatch({
      type: 'FETCH_BATMAN_SHOWS',
      payload: axios.get(url).then(response => response.data)
    });
  };
}

export function fetchBatmanShow(id) {
  let url = `http://api.tvmaze.com/shows/${id}`;
  return dispatch => {
    dispatch({
      type: 'FETCH_BATMAN_SHOW',
      payload: axios.get(url).then(response => response.data)
    });
  };
}
