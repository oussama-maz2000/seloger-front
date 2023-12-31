import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AnnonceListComponent } from './list-annonce/annonce-list.component';
import { AnnonceSingleComponent } from './details-annonce/annonce-single.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CreateAnnonceComponent } from './create-annonce/create.annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';

import { QuillModule } from 'ngx-quill';
import { SingleAnnounceComponent } from './single-announce/single-announce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AnnonceListComponent },
      { path: 'annonce-details/:id', component: AnnonceSingleComponent },
      { path: 'annonce-create', component: CreateAnnonceComponent },
      { path: 'annonce', component: AnnonceComponent },
      { path: 'annonce-add', component: AddAnnonceComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AnnonceListComponent,
    AnnonceSingleComponent,
    CreateAnnonceComponent,
    AnnonceComponent,
    SingleAnnounceComponent,
    AddAnnonceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDropzoneModule,
    RouterModule.forChild(routes),
    QuillModule,
  ],
})
export class AnnonceModule {}
