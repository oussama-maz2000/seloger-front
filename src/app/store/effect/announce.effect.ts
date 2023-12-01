import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '..';
import { Router } from '@angular/router';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';

import {
  ActionTypes,
  AddAnnounceSuccessAction,
  CreateAnnonce,
  LoadAnnounceAction,
  LoadAnnounceSuccessAction,
  addAnnounceAction,
} from '../action/announce.action';
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  of,
  tap,
  withLatestFrom,
} from 'rxjs';
//
import { Announce } from 'src/app/core/model/announce.interface';
import { MessageAction, SpinnerAction } from '../action/shared.action';
import { getAllAnnounces } from '../selector/announce.selector';
import { ToastrService } from 'ngx-toastr';
import { ToasterService } from 'src/app/core/services/announce-service/toast.service';

@Injectable()
export class AnnounceEffect {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private router: Router,
    private announceService: AnnounceService,
    private toastr: ToasterService
  ) {}

  addAnnounce$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(addAnnounceAction),
        mergeMap((action) => {
          return this.announceService.addAnnounce(action.formValues).pipe(
            map((data: Announce[]) => {
              this.store.dispatch(SpinnerAction({ status: false }));

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

  createAnnonce$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CreateAnnonce),
        mergeMap((element) =>
          this.announceService
            .addProprietaireWithPropriete(element.property, element.files)
            .pipe(
              tap((result) => {
                console.log(result);
                this.store.dispatch(SpinnerAction({ status: false }));
                this.toastr.showSuccess(result); // Assuming 'success' is the method

                // Perform any additional side-effects here
              }),
              catchError((error: any) => {
                console.log(error);
                this.toastr.showError(error.error); // Assuming 'error' is the method
                setTimeout(() => {
                  this.store.dispatch(SpinnerAction({ status: false }));
                }, 2000);
                return of();
              })
            )
        )
        // If you are not dispatching a new action, keep dispatch: false
      );
    },
    { dispatch: false }
  );
}
