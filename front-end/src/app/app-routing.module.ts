import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nwitwork', pathMatch: 'full' },
  {
    path: 'nwitwork',
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
