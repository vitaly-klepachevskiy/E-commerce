import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

// const middleWares = [logger];

// const composedEnhencers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer);
