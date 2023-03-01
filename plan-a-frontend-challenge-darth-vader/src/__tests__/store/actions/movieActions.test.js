import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadUser } from '../../../store/actions/authActions';
import { LOGIN_SUCCESS, AUTH_ERROR } from '../../../store/types/authTypes';

const mockStore = configureMockStore([thunk]);

describe('authActions', () => {
  let mockAxios;
  let store;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore({ auth: {} });
  });

  afterEach(() => {
    mockAxios.restore();
  });

  describe('loadUser', () => {
    it('should dispatch LOGIN_SUCCESS on successful load', async () => {
      const data = { token: 'abc123' };
      mockAxios.onGet().reply(200, data);

      await store.dispatch(loadUser());

      expect(store.getActions()).toEqual([
        {
          type: LOGIN_SUCCESS,
          payload: data,
        },
      ]);
    });

    it('should dispatch AUTH_ERROR on unsuccessful load', async () => {
      mockAxios.onGet().reply(500);

      await store.dispatch(loadUser());

      expect(store.getActions()).toEqual([
        {
          type: AUTH_ERROR,
        },
      ]);
    });
  });
});
