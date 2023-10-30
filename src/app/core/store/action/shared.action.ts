import { createAction, props } from '@ngrx/store';

const SET_LOADING_ACTION = '[SHARED STATE] set loading spinner';

export const loadingAction = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);
