import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActualitesComponent } from './features/home/actualites/actualites.component';
import { ProjetImmobilierComponent } from './features/home/projet-immobilier/projet-immobilier.component';
import { AnnoncesImmobiliersComponent } from './features/home/annonces-immobiliers/annonces-immobiliers.component';
import { RechercheImmobilierComponent } from './features/home/recherche-immobilier/recherche-immobilier.component';
import { ImmobilierTemplateComponent } from './features/test/immobilier-template/immobilier-template.component';
import { ImageSliderComponent } from './features/test/image-slider/image-slider.component';
import { LogInComponent } from './features/log-in/log-in.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { SpinnerComponent } from './core/shared/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastModule } from 'primeng/toast';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { AnnounceEffect } from './store/effect/announce.effect';
import { AdminComponent } from './features/admin/admin.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { InputTextModule } from 'primeng/inputtext';
import { AgGridModule } from 'ag-grid-angular';
import { UpdateBtnComponent } from './core/shared/update-btn/update-btn.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { MessageComponent } from './core/shared/message/message.component';
import { TestComponent } from './features/test/test/test.component';
import { FooterComponent } from './features/footer/footer.component';
import { DemandCompteComponent } from './features/demand-compte/demand-compte.component';
import { LottieModule } from 'ngx-lottie';
import { playerFactory } from '../app/core/shared/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ActualitesComponent,
    ProjetImmobilierComponent,
    AnnoncesImmobiliersComponent,
    RechercheImmobilierComponent,
    ImmobilierTemplateComponent,
    ImageSliderComponent,
    LogInComponent,
    SpinnerComponent,
    AdminComponent,
    UpdateBtnComponent,
    TestComponent,
    FooterComponent,
    DemandCompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    SpeedDialModule,
    TreeSelectModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ConfirmDialogModule,
    MessageComponent,

    BrowserAnimationsModule,
    AgGridModule,
    QuillModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 20000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AnnounceEffect]),
    LottieModule.forRoot({
      player: playerFactory,
    }),
  ],

  exports: [NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
