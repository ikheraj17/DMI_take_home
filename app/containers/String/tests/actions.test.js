import { loadStrings, loadStringsSuccess } from '../actions';
import { LOAD_STRINGS, LOAD_STRINGS_SUCCESS } from '../constants';
// const { loadStrings, loadStringsSuccess } = require('../actions');
// const { LOAD_STRINGS, LOAD_STRINGS_SUCCESS } = require('../constants');

describe('String actions', () => {
  describe('loadStrings Action', () => {
    it(`has a type of ${LOAD_STRINGS}`, () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });

  describe('loadStringsSuccess Action', () => {
    it(`has a type of ${LOAD_STRINGS_SUCCESS}`, () => {
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
      };
      expect(loadStringsSuccess()).toEqual(expected);
    });
  });
});
