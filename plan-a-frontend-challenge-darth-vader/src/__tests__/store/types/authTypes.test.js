import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    AUTH_ERROR,
    SET_LOADING,
  } from '../../../store/types/authTypes';
  
  describe('authTypes', () => {
    test('LOGIN_REQUEST should match string', () => {
      expect(LOGIN_REQUEST).toBe('LOGIN_REQUEST');
    });
  
    test('LOGIN_SUCCESS should match string', () => {
      expect(LOGIN_SUCCESS).toBe('LOGIN_SUCCESS');
    });
  
    test('LOGIN_FAIL should match string', () => {
      expect(LOGIN_FAIL).toBe('LOGIN_FAIL');
    });
  
    test('LOGOUT should match string', () => {
      expect(LOGOUT).toBe('LOGOUT');
    });
  
    test('AUTH_ERROR should match string', () => {
      expect(AUTH_ERROR).toBe('AUTH_ERROR');
    });
  
    test('SET_LOADING should match string', () => {
      expect(SET_LOADING).toBe('SET_LOADING');
    });
  });
  