import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../store/reducers/index';
import thunk from 'redux-thunk';

const middlewares = [thunk];

describe('Store', () => {
  test('should create store', () => {
    const store = createStore(rootReducer, applyMiddleware(...middlewares));
    expect(store.getState()).toBeDefined();
  });

  test('should handle dispatch action', () => {
    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    const action = { type: 'TEST_ACTION' };
    store.dispatch(action);

    expect(store.getState()).toBeDefined();
  });
});
