import { Action, createAction, props } from '@ngrx/store';
import { type } from 'src/app/core/utils/utils';

const ActionTypes = {
  SPINNER: type('[shared] show spinner'),
  MESSAGE: type('[shared] message'),
};

export const SpinnerAction = createAction(
  ActionTypes.SPINNER,
  props<{ status: boolean }>()
);

export const MessageAction = createAction(
  ActionTypes.MESSAGE,
  props<{
    status: boolean;
    typeMessage: string;
    message: string;
  }>()
);
