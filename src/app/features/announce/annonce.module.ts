import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddAnnounce } from './annonce-add/add-announce.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { AnnonceSingleComponent } from './annonce-single/annonce-single.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AnnonceListComponent },
      { path: 'annonce-details/:id', component: AnnonceSingleComponent },
      { path: 'annonce-add', component: AddAnnounce },
    ],
  },
];

@NgModule({
  declarations: [AddAnnounce, AnnonceListComponent, AnnonceSingleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forChild(routes),
  ],
})
export class AnnonceModule {}
