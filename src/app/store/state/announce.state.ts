import { EntityState } from '@ngrx/entity';
import { announceAdapter } from '../entity/announce.entity';

export interface AnnounceState extends EntityState<any> {}

/* 
export const announceInitialState: AnnounceState = {
  announce: undefined,
  error: undefined,
};
 */
export const announceInitialState: AnnounceState =
  announceAdapter.getInitialState();
