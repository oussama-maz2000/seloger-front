import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { AnnounceResponse } from 'src/app/core/model/announce.interface';

export interface PostState extends EntityState<AnnounceResponse> {}

export const postAdapter = createEntityAdapter<AnnounceResponse>();
