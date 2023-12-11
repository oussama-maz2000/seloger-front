import { Announce, Property } from 'src/app/core/model/announce.interface';

export interface AnnounceState {
  annonces: Property[];
}

export const intialAnnounceState: AnnounceState = {
  annonces: undefined,
};
