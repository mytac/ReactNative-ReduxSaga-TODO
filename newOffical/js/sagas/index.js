import { put, takeEvery } from 'redux-saga/effects';

import { FETCHING_TODO, FETCHING_TODO_SUCCESS, FETCHING_TODO_FAILURE } from '../actions';
import { fetchData } from '../api';

function* fetchingData() {
  try {
    const data = yield fetchData();
    yield put({ type: FETCHING_TODO_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_TODO_FAILURE });
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_TODO, fetchingData);
}

export default dataSaga;
