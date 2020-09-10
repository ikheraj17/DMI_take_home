/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () => {
  return createSelector(
    selectHome,
    homeState => homeState.username,
  );
};

const makeSelectStrings = () => {
  return createSelector(
    selectHome,
    homeState => homeState.strings,
  );
};

export { selectHome, makeSelectUsername, makeSelectStrings };
