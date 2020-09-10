import { call, put, all, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_STRINGS } from './constants';
import { loadStringsSuccess, loadStringsFailure } from './actions';

// Individual exports for testing
export function* onGetAllStrings() {
  const requestURL = `/api`;
  try {
    const allStrings = yield call(request, requestURL);
    yield put(loadStringsSuccess(allStrings));
  } catch (err) {
    yield put(loadStringsFailure(err));
  }
}

export function* getAllStrings() {
  yield takeLatest(LOAD_STRINGS, onGetAllStrings);
}

export default function* stringSaga() {
  yield all([getAllStrings()]);
}
