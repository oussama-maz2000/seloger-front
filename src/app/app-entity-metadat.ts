import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Announce: {},
};

export const entityConfiguration: EntityDataModuleConfig = {
  entityMetadata,
};
