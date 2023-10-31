import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '..';
import { Router } from '@angular/router';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';

import { ActionTypes, AddAnnounceErrorAction } from '../action/announce.action';
import { catchError, mergeMap, of } from 'rxjs';

@Injectable()
export class AnnounceEffect {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private router: Router,
    private announceService: AnnounceService
  ) {}

  addAnnounce = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.ADD_ANNOUNCE),
      mergeMap((actionData: any) =>
        this.announceService.addAnnounce(actionData.payload).pipe(
          mergeMap((data: any) => {
            console.log(data);
            return of(data);
          }),
          catchError((error) => {
            console.log(error);
            return [new AddAnnounceErrorAction(error)];
          })
        )
      )
    )
  );
}
