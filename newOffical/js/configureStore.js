import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import app from './reducer';
import dataSaga from './sagas';

export default function configureStore() {
  return createStore(app, applyMiddleware(createSagaMiddleware(dataSaga)));
}
