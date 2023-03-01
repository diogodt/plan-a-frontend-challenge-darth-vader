import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Loader from '../../components/Loader';

configure({ adapter: new Adapter() });

describe('<Loader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it('should render a div with class "loader-container"', () => {
    expect(wrapper.find('div.loader-container')).toHaveLength(1);
  });

  it('should render a div with class "loader"', () => {
    expect(wrapper.find('div.loader')).toHaveLength(1);
  });

  it('should render a span with class "sr-only" and text "Loading..."', () => {
    expect(wrapper.find('span.sr-only')).toHaveLength(1);
    expect(wrapper.find('span.sr-only').text()).toEqual('Loading...');
  });

  it('should not render a message if no "message" prop is provided', () => {
    expect(wrapper.find('p.loader-message')).toHaveLength(0);
  });

  it('should render a message if a "message" prop is provided', () => {
    const message = 'Please wait...';
    wrapper.setProps({ message });
    expect(wrapper.find('p.loader-message')).toHaveLength(1);
    expect(wrapper.find('p.loader-message').text()).toEqual(message);
  });
});
