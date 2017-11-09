import { put, takeEvery } from 'redux-saga/effects';

import { FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA } from '../actions';
import getData from '../api';

function* fetchData(action) {
  try {
    const data = yield getData();
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData);
}

export default dataSaga;
