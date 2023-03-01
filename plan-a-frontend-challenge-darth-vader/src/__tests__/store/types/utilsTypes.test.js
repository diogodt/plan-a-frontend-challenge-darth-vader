import {
    SET_LOADING,
    CLEAR_ERRORS,
    GET_ERRORS,
  } from '../../../store/types/utilsTypes';
  
  describe('utilsTypes', () => {
    test('SET_LOADING should match string', () => {
      expect(SET_LOADING).toBe('SET_LOADING');
    });
  
    test('CLEAR_ERRORS should match string', () => {
      expect(CLEAR_ERRORS).toBe('CLEAR_ERRORS');
    });
  
    test('GET_ERRORS should match string', () => {
      expect(GET_ERRORS).toBe('GET_ERRORS');
    });
  });
  