import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Announce } from '../../model/property.interface';
@Injectable({ providedIn: 'root' })
export class AnnounceService extends EntityCollectionServiceBase<Announce> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Announce', serviceElementFactory);
  }
}
