import produce from 'immer';
import stringReducer from '../reducer';
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

  it('should handle the loadStrings action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.allStrings = [];
    });

    expect(stringReducer(state, loadStrings())).toEqual(expectedResult);
  });

  it('should handle the loadStringsSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = false;
      draft.allStrings = [{ id: 1, text: 'this is a string' }];
    });

    expect(
      stringReducer(
        state,
        loadStringsSuccess([{ id: 1, text: 'this is a string' }]),
      ),
    ).toEqual(expectedResult);
  });
});
