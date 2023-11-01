import * as announceAction from '../action/announce.action';
import * as announceAdapter from '../entity/announce.entity';
import { AnnounceState, announceInitialState } from '../state/announce.state';

export function reducer(
  state = announceInitialState,
  action: any
): AnnounceState {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case announceAction.ActionTypes.ADD_ANNOUNCE_ERROR:
    case announceAction.ActionTypes.ADD_ANNOUNCE_SUCCESS: {
      return announceAdapter.postAdapter.addOne(state.announce, action.payload);
    }
    default:
      return state;
  }
}
