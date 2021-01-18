import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthenticatedWrapperComponent } from './unauthenticated-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentication' },
  {
    path: 'authentication',
    component: UnauthenticatedWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedRoutingModule {}
