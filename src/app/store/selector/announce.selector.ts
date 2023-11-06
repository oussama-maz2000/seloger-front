import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnnounceState } from '../state/announce.state';

const getAnnounceState =
  createFeatureSelector<AnnounceState>('announceReducer');

export const getAllAnnounces = createSelector(getAnnounceState, (state) => {
  return state.announces;
});
