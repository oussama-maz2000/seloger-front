import { Announce } from 'src/app/core/model/announce.interface';

export interface AnnounceState {
  announces: Announce[];
}

export const intialAnnounceState: AnnounceState = {
  announces: undefined,
};
