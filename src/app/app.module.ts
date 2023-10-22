import { NgModule } from '@angular/core';
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
import { AnnonceService } from './core/services/annonce.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [AnnonceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
