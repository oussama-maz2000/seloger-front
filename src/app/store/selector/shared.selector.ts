import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from '../state/shared.state';

const getSharedState = createFeatureSelector<SharedState>('sharedReducer');
export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getType = createSelector(getSharedState, (state) => {
  return state.typeAlert;
});

export const getMessage = createSelector(getSharedState, (state) => {
  return state.messageAlert;
});

export const getAlert = createSelector(getSharedState, (state) => {
  return state.showAlert;
});
