import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./components/initial/initial.module').then(
        (m) => m.InitialModule
      ),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./components/unauthenticated/unauthenticated.module').then(
        (m) => m.UnauthenticatedModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/authenticated/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
