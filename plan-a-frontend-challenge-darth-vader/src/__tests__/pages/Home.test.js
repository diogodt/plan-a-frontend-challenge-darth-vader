import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Home from '../../pages/Home';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

describe('Home', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      movie: {
        latestMovie: null,
        loading: false,
        error: null,
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render the Loader component while loading', () => {
    store = mockStore({
      movie: {
        latestMovie: null,
        loading: true,
        error: null,
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('should render the error message if there is an error', () => {
    store = mockStore({
      movie: {
        latestMovie: null,
        loading: false,
        error: 'Error!',
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find('.error')).toHaveLength(1);
  });

  it('should render the movie details if latestMovie exists', () => {
    const movie = {
      id: 1,
      title: 'Movie Title',
      overview: 'Movie Overview',
      poster_path: 'poster.jpg',
      genres: [{ name: 'Action' }, { name: 'Thriller' }],
      release_date: '2021-01-01',
      runtime: 120,
    };
  
    store = mockStore({
      movie: {
        latestMovie: movie,
        loading: false,
        error: null,
      },
    });
  
    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  
    const props = wrapper.find('Home').props();
  
    expect(props.movie.latestMovie).toEqual(movie);
    expect(wrapper.find('.movie-title')).toHaveLength(1);
    expect(wrapper.find('.movie-overview')).toHaveLength(1);
    expect(wrapper.find('.movie-poster')).toHaveLength(1);
  });

  it('should render the not found poster if latestMovie does not have poster_path', () => {
    const movie = {
      id: 1,
      title: 'Movie Title',
      overview: 'Movie Overview',
    };

    store = mockStore({
      movie: {
        latestMovie: movie,
        loading: false,
        error: null,
      },
    });

    wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find('.not-found-poster')).toHaveLength(1);
  });
});
