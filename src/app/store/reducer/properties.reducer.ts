import { createReducer, on } from '@ngrx/store';
import { intialPropertiesState } from '../state/properties.state';
import * as propertiesAction from '../action/properties.action';
const _propertiesReducer = createReducer(
  intialPropertiesState,

  on(propertiesAction.getPropertiesWithSuccess, (state, action) => {
    return {
      ...state,
      properties: action.properties,
    };
  })
);

export function reducer(state, action) {
  return _propertiesReducer(state, action);
}
