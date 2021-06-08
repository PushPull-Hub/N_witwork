import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home-tab/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'messenger',
        loadChildren: () =>
          import('./messenger-tab/messenger.module').then(
            (m) => m.MessengerModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile-tab/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedUserRoutingModule {}
