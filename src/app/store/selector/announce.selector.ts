import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnnounceState } from '../state/announce.state';

export const profileSelector =
  createFeatureSelector<AnnounceState>('announceReducer');

export const getProfile = createSelector(
  profileSelector,
  (announceState: AnnounceState) => announceState.announce
);
