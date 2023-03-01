import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { login } from '../../../store/actions/authActions';
import { SET_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from '../../../store/types/authTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  const mock = new MockAdapter(axios);
  const formData = {
    email: 'test@test.com',
    password: 'password',
  };
  const token = 'test-token';

  afterEach(() => {
    mock.reset();
  });

  it('should dispatch SET_LOADING and login on successful login', async () => {
    mock.onPost('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8a732f489f66fcfb6feee9839dc02d76', formData).reply(200, { token });

    const expectedActions = [
      { type: SET_LOADING, payload: true },
      { type: LOGIN_SUCCESS, payload: { token } },
    ];

    const store = mockStore({});

    await store.dispatch(login(formData));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch SET_LOADING and LOGIN_FAIL on failed login', async () => {
    const errorResponse = { response: { data: { message: 'Invalid credentials' } }, message: 'Invalid credentials' };
    mock.onPost('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8a732f489f66fcfb6feee9839dc02d76', formData).reply(401, errorResponse);

    const expectedActions = [
      { type: SET_LOADING, payload: true },
      { type: LOGIN_FAIL, payload: errorResponse.response.data.message },
    ];

    const store = mockStore({});

    await store.dispatch(login(formData));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
