import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { SignUpComponent } from './features/sign-up/sign-up.component';

import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { QuillModule } from 'ngx-quill';
import { SpinnerComponent } from './core/shared/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { AnnounceDataService } from './core/services/announce-service/announce.data.service';
import { entityConfiguration } from './app-entity-metadat';
import { StoreModule } from '@ngrx/store';

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
    SignUpComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    StoreModule.forRoot(),
    EntityDataModule.forRoot(entityConfiguration),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NgxSpinnerModule],
  providers: [AnnounceDataService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    entityDataService: EntityDataService,
    announceDataService: AnnounceDataService
  ) {
    entityDataService.registerService('Announce', announceDataService);
  }
}
