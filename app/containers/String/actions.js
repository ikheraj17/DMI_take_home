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

export function loadStringsSuccess(allStrings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    allStrings,
  };
}

export function loadStringsFailure(err) {
  return {
    type: LOAD_STRINGS_FAILURE,
    err,
  };
}

module.exports = { loadStrings, loadStringsSuccess };
