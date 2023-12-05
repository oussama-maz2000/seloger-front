import { createAction, props } from '@ngrx/store';
import { PropertyResponse } from 'src/app/core/model/Property.interface';
import { type } from 'src/app/core/utils/utils';

export const ActionTypes = {
  GET_PROPERTIES: type('[properties] getting properties '),
  GET_PROPERTIES_SUCCESS: type('[properties] properties loaded successfuly '),
  GET_PROPERTIES_ERROR: type('[properties] properties has error '),
};

export const getProperties = createAction(ActionTypes.GET_PROPERTIES);
export const getPropertiesWithSuccess = createAction(
  ActionTypes.GET_PROPERTIES_SUCCESS,
  props<{ properties: PropertyResponse[] }>()
);
