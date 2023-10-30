import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from '../state/shared.state';

const getSharedState = createFeatureSelector<SharedState>('shared');
export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});
