import { SharedState, initialSharedState } from '../state/shared.state';
import { MessageAction, SpinnerAction } from '../action/shared.action';
import { createReducer, on } from '@ngrx/store';

const _sharedReducer = createReducer(
  initialSharedState,
  on(SpinnerAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(MessageAction, (state, action) => {
    return {
      ...state,
      showAlert: action.status,
      typeAlert: action.typeMessage,
      messageAlert: action.message,
    };
  })
);

export function reducer(state, action) {
  return _sharedReducer(state, action);
}
