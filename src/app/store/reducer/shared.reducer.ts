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
    console.log(action);

    return {
      ...state,
      showAlert: action.status,
      type: action.typeMessage,
      message: action.message,
    };
  })
);

export function reducer(state, action) {
  return _sharedReducer(state, action);
}
