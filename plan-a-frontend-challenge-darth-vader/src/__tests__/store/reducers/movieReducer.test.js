import movieReducer from '../../../store/reducers/movieReducer';
import { GET_MOVIES_FAIL, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, SET_LOADING } from '../../../store/types/movieTypes';

describe('movieReducer', () => {
  const initialState = {
    latestMovie: null,
    movies: [],
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_MOVIES_REQUEST', () => {
    expect(
      movieReducer(initialState, {
        type: GET_MOVIES_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle GET_MOVIES_SUCCESS', () => {
    const movie = { title: 'Test Movie' };
    expect(
      movieReducer(initialState, {
        type: GET_MOVIES_SUCCESS,
        payload: movie,
      })
    ).toEqual({
      ...initialState,
      latestMovie: movie,
      loading: false,
      error: null,
    });
  });

  it('should handle GET_MOVIES_FAIL', () => {
    const error = 'Test Error';
    expect(
      movieReducer(initialState, {
        type: GET_MOVIES_FAIL,
        payload: error,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: error,
    });
  });

  it('should handle SET_LOADING', () => {
    expect(
      movieReducer(initialState, {
        type: SET_LOADING,
        payload: true,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
});
