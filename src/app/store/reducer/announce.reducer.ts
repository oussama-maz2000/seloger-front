import * as announceAction from '../action/announce.action';
import { AnnounceState, announceInitialState } from '../state/announce.state';

export function reducer(
  state = announceInitialState,
  action: any
): AnnounceState {
  switch (action.type) {
    case announceAction.ActionTypes.ADD_ANNOUNCE_ERROR:
    case announceAction.ActionTypes.ADD_ANNOUNCE_SUCCESS: {
      return {
        ...state,
        announce: action.payload,
      };
    }
  }
}
