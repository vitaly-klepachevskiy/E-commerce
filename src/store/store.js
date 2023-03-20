import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, {}, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
