import { setLoading } from '../../../store/actions/utilsActions';
import { SET_LOADING } from '../../../store/types/utilsTypes';

describe('setLoading action', () => {
  it('should create an action to set loading state', () => {
    const isLoading = true;
    const expectedAction = {
      type: SET_LOADING,
      payload: isLoading,
    };
    expect(setLoading(isLoading)).toEqual(expectedAction);
  });
});
