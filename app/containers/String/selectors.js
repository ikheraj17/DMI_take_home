import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the string state domain
 */

const selectStringDomain = state => state.string || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by String
 */

const makeSelectString = () =>
  createSelector(
    selectStringDomain,
    substate => substate,
  );

const makeAllStringsSelector = () =>
  createSelector(
    selectStringDomain,
    substate => substate.allStrings,
  );

const makeLoadingSelector = () =>
  createSelector(
    selectStringDomain,
    substate => substate.loading,
  );

export default makeSelectString;
export { selectStringDomain, makeAllStringsSelector, makeLoadingSelector };
