import { Action, createAction, props } from '@ngrx/store';
import { type } from 'src/app/core/utils/utils';

export const ActionTypes = {
  SHOW_LOADING: type('[shared] show loading'),
};

export class ShowLoadingAction implements Action {
  readonly type = ActionTypes.SHOW_LOADING;
  constructor(public payload: boolean) {}
}
