import axios from 'axios';
import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from '../types/movieTypes';

export const fetchMovies = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });

  try {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/latest?api_key=8a732f489f66fcfb6feee9839dc02d76&language=en-US'
    );

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_MOVIES_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const fetchMoviesFailure = (error) => ({
  type: GET_MOVIES_FAIL,
  payload: error,
});

export const fetchMoviesSuccess = (data) => ({
  type: GET_MOVIES_SUCCESS,
  payload: data,
});
