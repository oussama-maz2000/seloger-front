import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LogInComponent } from './features/log-in/log-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { ImmobilierTemplateComponent } from './features/test/immobilier-template/immobilier-template.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mon-compte/connexion', component: LogInComponent },
  { path: 'mon-compte/creation', component: SignUpComponent },
  { path: 'mon-compte/test', component: ImmobilierTemplateComponent },
  {
    path: 'annonce',
    loadChildren: () =>
      import('./features/announce/annonce.module').then(
        (module) => module.AnnonceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
