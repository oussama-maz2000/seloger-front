import { createReducer, on } from '@ngrx/store';
import * as announceAction from '../action/announce.action';

import { AnnounceState, intialAnnounceState } from '../state/announce.state';

/* export function reducer(
  state = announceInitialState,
  action: any
): AnnounceState {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case announceAction.ActionTypes.ADD_ANNOUNCE_ERROR:
    case announceAction.ActionTypes.ADD_ANNOUNCE_SUCCESS: {
      return announceAdapter.announceAdapter.addOne(action.payload, state);
    }
    default:
      return state;
  }
}
 */

const _announceReducer = createReducer(
  intialAnnounceState,

  on(announceAction.AddAnnounceSuccessAction, (state, action) => {
    return {
      ...state,
      announces: action.announce,
    };
  }),
  on(announceAction.LoadAnnounceSuccessAction, (state, action) => {
    return {
      ...state,
      announces: action.announces,
    };
  })
);

export function reducer(state, action) {
  return _announceReducer(state, action);
}
