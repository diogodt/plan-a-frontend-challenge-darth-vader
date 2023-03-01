import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';

jest.mock('axios');

describe('setAuthToken', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set Authorization header if token is provided', () => {
    const token = 'my-token';
    setAuthToken(token);

    expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer ${token}`);
  });

  it('should delete Authorization header if token is not provided', () => {
    setAuthToken();

    expect(axios.defaults.headers.common['Authorization']).toBeUndefined();
  });
});
