import * as fromSharedState from '../store/state/shared.state';
import * as fromAnnounceState from '../store/state/announce.state';
import * as fromSharedReducer from '../store/reducer/shared.reducer';
import * as fromAnnounceReducer from '../store/reducer/shared.reducer';
export interface State {
  sharedState: fromSharedState.SharedState;
  announceState: fromAnnounceState.AnnounceState;
}

export const reducers = {
  shared: fromSharedReducer.SharedReducer,
  announce: fromAnnounceReducer.SharedReducer,
};
