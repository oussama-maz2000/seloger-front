import { createAction, props } from '@ngrx/store';
import { PropertyResponse } from 'src/app/core/model/Property.interface';
import { Property } from 'src/app/core/model/announce.interface';
import { type } from 'src/app/core/utils/utils';

export const ActionTypes = {
  GET_PROPERTIES: type('[properties] getting properties '),
  GET_PROPERTIES_SUCCESS: type('[properties] properties loaded successfuly '),
  GET_PROPERTIES_ERROR: type('[properties] properties has error '),

  UPDATE_PROPERTIE: type('[propertie] update propertie'),
  UPDATE_PROPERTIE_SUCCESS: type('[propertie] update propertie successfuly'),
};

export const getProperties = createAction(ActionTypes.GET_PROPERTIES);
export const getPropertiesWithSuccess = createAction(
  ActionTypes.GET_PROPERTIES_SUCCESS,
  props<{ properties: PropertyResponse[] }>()
);
export const updatePropertyAction = createAction(
  ActionTypes.UPDATE_PROPERTIE,
  props<{ property: Property; images: File[],id:number,pathsDeleted:string[] }>()
);
