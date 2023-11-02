import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Announce } from 'src/app/core/model/announce.interface';

export const announceAdapter = createEntityAdapter<Announce>();
