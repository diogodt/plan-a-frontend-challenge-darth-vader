import authReducer from '../../../store/reducers/authReducer';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  SET_LOADING,
} from '../../../store/types/authTypes';

describe('authReducer', () => {
  const initialState = {
    token: null,
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(authReducer(initialState, { type: LOGIN_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const payload = {
      token: 'token',
      user: { name: 'John Doe' },
    };
    expect(authReducer(initialState, { type: LOGIN_SUCCESS, payload })).toEqual({
      ...initialState,
      isAuthenticated: true,
      user: payload.user,
      token: payload.token,
      loading: false,
      error: null,
    });
  });

  it('should handle AUTH_ERROR', () => {
    const payload = 'Authentication error';
    expect(authReducer(initialState, { type: AUTH_ERROR, payload })).toEqual({
      ...initialState,
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
      error: payload,
    });
  });

  it('should handle LOGIN_FAIL', () => {
    const payload = 'Login failed';
    expect(authReducer(initialState, { type: LOGIN_FAIL, payload })).toEqual({
      ...initialState,
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
      error: payload,
    });
  });

  it('should handle LOGOUT', () => {
    expect(authReducer(initialState, { type: LOGOUT })).toEqual({
      ...initialState,
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
      error: undefined,
    });
  });

  it('should handle SET_LOADING', () => {
    expect(authReducer(initialState, { type: SET_LOADING })).toEqual({
      ...initialState,
      loading: undefined,
    });
  });
});
