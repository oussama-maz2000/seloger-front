import { SharedReducer } from './reducer/shared.reducer';
import { SharedState } from './state/shared.state';

export interface AppState {
  shared: SharedState;
}

export const appReducer = {
  shared: SharedReducer,
};
