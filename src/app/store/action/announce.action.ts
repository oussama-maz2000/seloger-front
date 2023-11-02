import { Action, createAction, props } from '@ngrx/store';
import { Announce } from 'src/app/core/model/announce.interface';
import { type } from 'src/app/core/utils/utils';

export const ActionTypes = {
  ADD_ANNOUNCE: type('[announce] Add announce'),
  ADD_ANNOUNCE_ERROR: type('[announce]  Add announce error'),
  ADD_ANNOUNCE_SUCCESS: type('[announce]  Add announce success'),
};

/* export class AddAnnounceAction implements Action {
  readonly type = ActionTypes.ADD_ANNOUNCE;
  constructor(public payload: any) {}
}

export class AddAnnounceSuccessAction implements Action {
  readonly type = ActionTypes.ADD_ANNOUNCE_SUCCESS;

  constructor(public payload: any) {}
}

export class AddAnnounceErrorAction implements Action {
  readonly type = ActionTypes.ADD_ANNOUNCE_ERROR;

  constructor(public payload: any) {}
}
 */

export const addAnnounceAction = createAction(
  ActionTypes.ADD_ANNOUNCE,
  props<{ formValues: any }>()
);
export const AddAnnounceSuccessAction = createAction(
  ActionTypes.ADD_ANNOUNCE_SUCCESS,
  props<{ announce: Announce }>()
);
