import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LogInComponent } from './features/log-in/log-in.component';
import { AdminComponent } from './features/admin/admin.component';
import { DemandCompteComponent } from './features/demand-compte/demand-compte.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connexion', component: LogInComponent },
  { path: 'demand-compte', component: DemandCompteComponent },

  {
    path: 'annonce',
    loadChildren: () =>
      import('./features/announce/annonce.module').then(
        (module) => module.AnnonceModule
      ),
  },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
