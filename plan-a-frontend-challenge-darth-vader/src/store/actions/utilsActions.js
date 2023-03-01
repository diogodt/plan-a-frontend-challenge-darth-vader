import { SET_LOADING } from '../types/utilsTypes';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
