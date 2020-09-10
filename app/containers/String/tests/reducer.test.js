import produce from 'immer';
import stringReducer from '../reducer';
// import { someAction } from '../actions';
import { loadStrings, loadStringsSuccess } from '../actions';
/* eslint-disable default-case, no-param-reassign */
describe('stringReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      allStrings: [],
      loading: false,
      error: true,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(stringReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
