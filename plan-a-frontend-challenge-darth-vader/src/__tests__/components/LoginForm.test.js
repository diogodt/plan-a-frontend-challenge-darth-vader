import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginForm from "../../components/LoginForm";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("LoginForm component", () => {
  const mockLoginUser = jest.fn();
  const mockIsAuthenticated = false;

  const mockStore = configureMockStore()({
    auth: {
      isAuthenticated: mockIsAuthenticated,
    },
  });

  it("renders correctly", () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <LoginForm
          loginUser={mockLoginUser}
          isAuthenticated={mockIsAuthenticated}
        />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("calls loginUser function when submitted", () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <LoginForm
          loginUser={mockLoginUser}
          isAuthenticated={mockIsAuthenticated}
        />
      </Provider>
    );
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockLoginUser).toHaveBeenCalled();
  });

  it("disables the button when email and password are not provided", () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <LoginForm
          loginUser={mockLoginUser}
          isAuthenticated={mockIsAuthenticated}
        />
      </Provider>
    );
    expect(wrapper.find("button[type='submit']").prop('disabled')).toEqual(true);
  });

  it("disables the button when password length is less than 6", () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <LoginForm
          loginUser={mockLoginUser}
          isAuthenticated={mockIsAuthenticated}
        />
      </Provider>
    );
    wrapper
      .find("input[name='email']")
      .simulate("change", { target: { name: "email", value: "test@test.com" } });
    wrapper
      .find("input[name='password']")
      .simulate("change", { target: { name: "password", value: "test" } });
    expect(wrapper.find("button[type='submit']").prop('disabled')).toEqual(true);
  });

  it("enables the button when email and password are provided", () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <LoginForm
          loginUser={mockLoginUser}
          isAuthenticated={mockIsAuthenticated}
        />
      </Provider>
    );
    wrapper
      .find("input[name='email']")
      .simulate("change", { target: { name: "email", value: "test@test.com" } });
    wrapper
      .find("input[name='password']")
      .simulate("change", {
        target: { name: "password", value: "testpassword" },
      });
    expect(wrapper.find("button[type='submit']").prop('disabled')).toEqual(false);
  });
});
