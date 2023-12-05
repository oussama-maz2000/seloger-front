import * as fromSharedState from '../store/state/shared.state';
import * as fromAnnounceState from '../store/state/announce.state';
import * as fromSharedReducer from '../store/reducer/shared.reducer';
import * as fromAnnounceReducer from '../store/reducer/announce.reducer';
import * as fromPropertiesState from '../store/state/properties.state';
import * as fromPropertiesReducer from '../store/reducer/properties.reducer';
import { ActionReducerMap } from '@ngrx/store';
export interface State {
  sharedReducer: fromSharedState.SharedState;
  announceReducer: fromAnnounceState.AnnounceState;
  propertiesReducer: fromPropertiesState.PropertiesState;
}

export const reducers: ActionReducerMap<State> = {
  sharedReducer: fromSharedReducer.reducer,
  announceReducer: fromAnnounceReducer.reducer,
  propertiesReducer: fromPropertiesReducer.reducer,
};
