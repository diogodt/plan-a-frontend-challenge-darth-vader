import {
    GET_LATEST_MOVIE_SUCCESS,
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAIL,
    SET_LOADING,
    CLEAR_ERRORS,
  } from '../../../store/types/movieTypes';
  
  describe('movieTypes', () => {
    test('GET_LATEST_MOVIE_SUCCESS should match string', () => {
      expect(GET_LATEST_MOVIE_SUCCESS).toBe('GET_LATEST_MOVIE_SUCCESS');
    });
  
    test('GET_MOVIES_REQUEST should match string', () => {
      expect(GET_MOVIES_REQUEST).toBe('GET_MOVIES_REQUEST');
    });
  
    test('GET_MOVIES_SUCCESS should match string', () => {
      expect(GET_MOVIES_SUCCESS).toBe('GET_MOVIES_SUCCESS');
    });
  
    test('GET_MOVIES_FAIL should match string', () => {
      expect(GET_MOVIES_FAIL).toBe('GET_MOVIES_FAIL');
    });
  
    test('SET_LOADING should match string', () => {
      expect(SET_LOADING).toBe('SET_LOADING');
    });
  
    test('CLEAR_ERRORS should match string', () => {
      expect(CLEAR_ERRORS).toBe('CLEAR_ERRORS');
    });
  });
  