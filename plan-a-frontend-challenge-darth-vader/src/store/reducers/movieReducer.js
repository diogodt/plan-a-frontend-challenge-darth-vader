import { GET_MOVIES_FAIL, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, SET_LOADING } from '../types/movieTypes';

const initialState = {
  latestMovie: null,
  movies: [],
  loading: false,
  error: null,
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        latestMovie: action.payload,
        loading: false,
        error: null,
      };
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
