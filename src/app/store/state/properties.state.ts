import { PropertyResponse } from 'src/app/core/model/Property.interface';

export interface PropertiesState {
  properties: PropertyResponse[];
}

export const intialPropertiesState: PropertiesState = {
  properties: undefined,
};
