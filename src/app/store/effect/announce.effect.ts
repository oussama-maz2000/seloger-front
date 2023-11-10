import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '..';
import { Router } from '@angular/router';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';

import {
  ActionTypes,
  AddAnnounceSuccessAction,
  LoadAnnounceAction,
  LoadAnnounceSuccessAction,
  addAnnounceAction,
} from '../action/announce.action';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';

import { Announce } from 'src/app/core/model/announce.interface';
import { MessageAction, SpinnerAction } from '../action/shared.action';
import { getAllAnnounces } from '../selector/announce.selector';

@Injectable()
export class AnnounceEffect {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private router: Router,
    private announceService: AnnounceService
  ) {}

  addAnnounce$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addAnnounceAction),
        mergeMap((action) => {
          return this.announceService.addAnnounce(action.formValues).pipe(
            map((data: Announce[]) => {
              this.store.dispatch(SpinnerAction({ status: false }));
              this.store.dispatch(
                MessageAction({
                  status: true,
                  typeMessage: 'suc',
                  message: 'well saved',
                })
              );
              this.store.dispatch(AddAnnounceSuccessAction({ announce: data }));
              this.router.navigate(['admin']);
            })
          );
        })
      );
    },
    { dispatch: false }
  );

  loadAnnounces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoadAnnounceAction),
      withLatestFrom(this.store.select(getAllAnnounces)),
      mergeMap(([action, Announce]) => {
        return this.announceService.getAllAnnounces().pipe(
          map((announces: Announce[]) => {
            this.store.dispatch(SpinnerAction({ status: false }));

            return LoadAnnounceSuccessAction({ announces });
          })
        );
      })
    );
  });
}
