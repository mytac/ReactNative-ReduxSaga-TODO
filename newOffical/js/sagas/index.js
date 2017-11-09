import { put, takeEvery } from 'redux-saga/effects';

import { FETCHING_TODO, FETCHING_TODO_SUCCESS, FETCHING_TODO_FAILURE } from '../actions';
import getData from '../api';

function* fetchData(action) {
  try {
    const data = yield getData();
    yield put({ type: FETCHING_TODO_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_TODO_FAILURE });
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_TODO, fetchData);
}

export default dataSaga;
