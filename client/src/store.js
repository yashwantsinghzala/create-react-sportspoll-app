import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger';
import reducer from './reducers/index';

const configureStore = () => {
  return createStore(reducer, applyMiddleware(logger));
};

export default configureStore;
