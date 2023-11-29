import { Action, createAction, props } from '@ngrx/store';
import {
  Announce,
  Properietaire,
  Property,
} from 'src/app/core/model/announce.interface';
import { type } from 'src/app/core/utils/utils';

export const ActionTypes = {
  ADD_ANNOUNCE: type('[announce] Add announce'),
  ADD_ANNOUNCE_ERROR: type('[announce]  Add announce error'),
  ADD_ANNOUNCE_SUCCESS: type('[announce]  Add announce success'),
  LOAD_ANNOUNCE: type('[announce] load announce'),
  LOAD_ANNOUNCE_SUCCESS: type('[announce]  load announce success'),
  CREATE_ANNONCE: type('[annonce] create annonce'),
  CREATE_ANNONCE_SUCCESS: type('[annonce] annonce created successfuly'),
  CREATE_ANNONCES_ERROR: type('[annonce] error when creating annonce '),
};

export const addAnnounceAction = createAction(
  ActionTypes.ADD_ANNOUNCE,
  props<{ formValues: any }>()
);
export const AddAnnounceSuccessAction = createAction(
  ActionTypes.ADD_ANNOUNCE_SUCCESS,
  props<{ announce: Announce[] }>()
);

export const LoadAnnounceAction = createAction(ActionTypes.LOAD_ANNOUNCE);

export const LoadAnnounceSuccessAction = createAction(
  ActionTypes.LOAD_ANNOUNCE_SUCCESS,
  props<{ announces: Announce[] }>()
);
export const CreateAnnonce = createAction(
  ActionTypes.CREATE_ANNONCE,
  props<{
    proprietaire: Properietaire;
    property: Property;
    files: File[];
  }>()
);
