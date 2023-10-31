import { SharedState, initialSharedState } from '../state/shared.state';
import * as sharedAction from '../action/shared.action';

export function reducer(state = initialSharedState, action: any): SharedState {
  switch (action.type) {
    case sharedAction.ActionTypes.SHOW_LOADING: {
      return {
        ...state,
        showLoading: action.payload,
      };
    }
    default:
      return state;
  }
}
