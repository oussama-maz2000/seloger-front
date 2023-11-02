import { SharedState, initialSharedState } from '../state/shared.state';
import { SpinnerAction } from '../action/shared.action';
import { createReducer, on } from '@ngrx/store';

const _sharedReducer = createReducer(
  initialSharedState,
  on(SpinnerAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  })
);

export function reducer(state, action) {
  return _sharedReducer(state, action);
}
