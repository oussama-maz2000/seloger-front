import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddAnnounce } from './annonce-add/add-announce.component';
import { AnnonceListComponent } from './list-annonce/annonce-list.component';
import { AnnonceSingleComponent } from './details-annonce/annonce-single.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AnnAddComponent } from './create-annonce/ann-add.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { QuillModule } from 'ngx-quill';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AnnonceListComponent },
      { path: 'annonce-details/:id', component: AnnonceSingleComponent },
      { path: 'annonce-add', component: AddAnnounce },
      { path: 'annonce-add-2', component: AnnAddComponent },
      { path: 'annonce', component: AnnonceComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AddAnnounce,
    AnnonceListComponent,
    AnnonceSingleComponent,
    AnnAddComponent,
    AnnonceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDropzoneModule,
    RouterModule.forChild(routes),
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
    QuillModule,
  ],
})
export class AnnonceModule {}
