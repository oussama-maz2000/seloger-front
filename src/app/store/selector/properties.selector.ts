import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertiesState } from '../state/properties.state';
import { PropertyResponse } from 'src/app/core/model/Property.interface';
import { Property } from 'src/app/core/model/announce.interface';

const getPropertiesState =
  createFeatureSelector<PropertiesState>('propertiesReducer');

export const getPropertiesSelector = createSelector(
  getPropertiesState,
  (state) => {
    return state.properties;
  }
);

export const getPropertyById = (propertyId: number) =>
  createSelector(getPropertiesState, (state) => {
    return state.properties.find((element) => {
      return element.id === propertyId;
    });
  });
