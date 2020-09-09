/*
 *
 * String reducer
 *
 */
import produce from 'immer';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_FAILURE,
  LOAD_STRINGS_SUCCESS,
} from './constants';

export const initialState = {
  allStrings: [],
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const stringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        console.log(action);
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.allStrings = action.allStrings;
        break;
      case LOAD_STRINGS_FAILURE:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default stringReducer;
