import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhencers = compose(applyMiddleware(thunk));
export const store = createStore(rootReducer, undefined, composedEnhencers);
