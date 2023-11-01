import * as fromSharedState from '../store/state/shared.state';
import * as fromAnnounceState from '../store/state/announce.state';
import * as fromSharedReducer from '../store/reducer/shared.reducer';
import * as fromAnnounceReducer from '../store/reducer/announce.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface State {
  sharedReducer: fromSharedState.SharedState;
  announceReducer: fromAnnounceState.AnnounceState;
}

export const reducers: ActionReducerMap<State> = {
  sharedReducer: fromSharedReducer.reducer,
  announceReducer: fromAnnounceReducer.reducer,
};
