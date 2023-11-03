import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { announceAdapter } from '../entity/announce.entity';

export interface AnnounceState extends EntityState<any> {}

export const announceInitialState: AnnounceState =
  announceAdapter.getInitialState();
