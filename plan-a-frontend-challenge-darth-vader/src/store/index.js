import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

let composedEnhancers;

if (process.env.NODE_ENV === 'development') {
  composedEnhancers = composeWithDevTools(applyMiddleware(...middleware));
} else {
  composedEnhancers = compose(applyMiddleware(...middleware));
}

const store = createStore(rootReducer, composedEnhancers);

export default store;
