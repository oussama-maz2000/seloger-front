import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnnounceState } from '../state/announce.state';
import { announceAdapter } from '../entity/announce.entity';

const getAnnounceState =
  createFeatureSelector<AnnounceState>('announceReducer');
const announceSelectore = announceAdapter.getSelectors();
const getAnnounceEntities = createSelector(
  getAnnounceState,
  announceSelectore.selectEntities
);

export const getAnnounces = createSelector(
  getAnnounceState,
  announceSelectore.selectAll
);
