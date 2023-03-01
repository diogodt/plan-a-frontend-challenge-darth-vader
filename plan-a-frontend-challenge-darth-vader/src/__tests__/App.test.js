import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; 
import App from '../App';
import store from '../store/index';

describe('index', () => {
  it('renders the application without crashing', () => {
    render(
      <Provider store={store}>
        <BrowserRouter> 
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
});
