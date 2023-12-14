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
import { Announce, Property } from 'src/app/core/model/announce.interface';
import { MessageAction, SpinnerAction } from '../action/shared.action';
import { getAllAnnounces } from '../selector/announce.selector';
import { ToastrService } from 'ngx-toastr';
import { ToasterService } from 'src/app/core/services/announce-service/toast.service';
import {
  getProperties,
  getPropertiesWithSuccess,
  updatePropertyAction,
} from '../action/properties.action';
import { PropertyResponse } from 'src/app/core/model/Property.interface';

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
            map((data: Property[]) => {
              this.store.dispatch(SpinnerAction({ status: false }));

              this.store.dispatch(AddAnnounceSuccessAction({ annonce: data }));
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
          map((announces: Property[]) => {
            this.store.dispatch(SpinnerAction({ status: false }));
            return LoadAnnounceSuccessAction({ annonces: announces });
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
                this.toastr.showSuccess(result);
              }),
              catchError((error: any) => {
                console.log(error);
                this.toastr.showError(error.error);
                setTimeout(() => {
                  this.store.dispatch(SpinnerAction({ status: false }));
                }, 2000);
                return of();
              })
            )
        )
      );
    },
    { dispatch: false }
  );

  getProperties$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProperties),
      mergeMap((element) => {
        return this.announceService.getProperties().pipe(
          map((properties: PropertyResponse[]) => {
            return getPropertiesWithSuccess({ properties });
          })
        );
      })
    );
  });

  updateProperty$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updatePropertyAction),
        mergeMap((element) => {
          return this.announceService
            .updateProperty(
              element.property,
              element.images,
              element.pathsDeleted
            )
            .pipe(
              tap((result) => {
                console.log(result);
                this.store.dispatch(SpinnerAction({ status: false }));
                this.toastr.showSuccess(result);
              }),
              catchError((error: any) => {
                console.log(error);
                this.toastr.showError(error.error);
                setTimeout(() => {
                  this.store.dispatch(SpinnerAction({ status: false }));
                }, 2000);
                return of();
              })
            );
        })
      );
    },
    { dispatch: false }
  );
}
