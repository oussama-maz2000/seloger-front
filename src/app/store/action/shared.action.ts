import { Action, createAction, props } from '@ngrx/store';
import { type } from 'src/app/core/utils/utils';

const ActionTypes = {
  SPINNER: type('[shared] show spinner'),
};
/* 
export class ShowLoadingAction implements Action {
  readonly type = ActionTypes.SHOW_LOADING;
  constructor(public payload: boolean) {}
}
 */

export const SpinnerAction = createAction(
  ActionTypes.SPINNER,
  props<{ status: boolean }>()
);
