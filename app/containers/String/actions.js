/*
 *
 * String actions
 *
 */

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_FAILURE,
} from './constants';

export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

export function loadStringsSuccess(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

export function loadStringsFailure(err) {
  return {
    type: LOAD_STRINGS_FAILURE,
    err,
  };
}
