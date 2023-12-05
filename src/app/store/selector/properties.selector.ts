import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertiesState } from '../state/properties.state';
import { PropertyResponse } from 'src/app/core/model/Property.interface';

const getPropertiesState =
  createFeatureSelector<PropertiesState>('propertiesReducer');

export const getPropertiesSelector = createSelector(
  getPropertiesState,
  (state) => {
    return state.properties;
  }
);
