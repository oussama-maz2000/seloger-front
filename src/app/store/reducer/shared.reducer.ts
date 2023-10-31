import { createReducer, on } from '@ngrx/store';
import { loadingAction } from '../action/shared.action';
import { initialSharedState } from '../state/shared.state';

const _sharedReducer = createReducer(
  initialSharedState,
  on(loadingAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  })
);

export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
