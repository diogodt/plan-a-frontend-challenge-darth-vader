import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
  SET_LOADING,
} from '../types/authTypes';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8a732f489f66fcfb6feee9839dc02d76');

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login User
export const login = (formData) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8a732f489f66fcfb6feee9839dc02d76', formData, config);

    localStorage.setItem('guest_session_id', res.data.guest_session_id);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    window.location.href = `/home`;
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message, // Update payload to use err.response.data.message
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  localStorage.removeItem('guest_session_id');

  dispatch({
    type: LOGOUT,
  });
};

// Action creator for handling auth errors
export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});

// Thunk action creator for logging out the user
export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post('/api/auth/logout');

    dispatch(logout());
  } catch (error) {
    console.error(error);
  }
};
