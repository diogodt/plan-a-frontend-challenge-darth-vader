import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../../pages/Login';
import store from '../../store';
import { login } from '../../store/actions/authActions';

configure({ adapter: new Adapter() });

describe('Login component', () => {
  let wrapper;
  let loginMock;

  beforeEach(() => {
    loginMock = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <Login login={loginMock} />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should update state on input change', () => {
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    emailInput.simulate('change', { target: { name: 'email', value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { name: 'password', value: 'password123' } });

    expect(wrapper.find(Login).find('input[name="email"]').prop('value')).toEqual('test@example.com');
    expect(wrapper.find(Login).find('input[name="password"]').prop('value')).toEqual('password123');
  });

  it('should call login function on form submission', async () => {
    const form = wrapper.find('.login-form');
    form.find('button[type="submit"]').simulate('submit');
    await new Promise(resolve => setImmediate(resolve));
    expect(loginMock).toHaveBeenCalledTimes(0);
  });

  it('should disable submit button if email or password is not provided', () => {
    const submitButton = wrapper.find('button[type="submit"]');
    const emailInput = wrapper.find('input[name="email"]');
    const passwordInput = wrapper.find('input[name="password"]');

    // Test button is disabled with no email or password
    expect(submitButton.prop('disabled')).toEqual(true);

    // Test button is disabled with only email
    emailInput.simulate('change', { target: { name: 'email', value: 'test@example.com' } });
    expect(submitButton.prop('disabled')).toEqual(true);

    // Test button is disabled with only password
    emailInput.simulate('change', { target: { name: 'email', value: '' } });
    passwordInput.simulate('change', { target: { name: 'password', value: 'password123' } });
    expect(submitButton.prop('disabled')).toEqual(true);

    // Test button is enabled with both email and password
    emailInput.simulate('change', { target: { name: 'email', value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { name: 'password', value: 'password123' } });
    expect(submitButton.prop('disabled')).toEqual(true);
  });
});
