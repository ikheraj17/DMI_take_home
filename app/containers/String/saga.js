import { call, put, all } from 'redux-saga/effects';
import request from 'utils/request';
import { loadStringsSuccess, loadStringsFailure } from './actions';

// Individual exports for testing
export function* getAllStrings() {
  const requestURL = `/strings`;
  try {
    const allStrings = yield call(request, requestURL);
    yield put(loadStringsSuccess(allStrings));
  } catch (err) {
    yield put(loadStringsFailure(err));
  }
}

export default function* stringSaga() {
  yield all([getAllStrings()]);
}
