import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDocumentationComponent } from './project-documentation/project-documentation.component';
import { ProjectFounderComponent } from './project-founder/project-founder.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UnauthenticatedWrapperComponent } from './unauthenticated-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthenticatedWrapperComponent,
    children: [
      { path: 'documentation', component: ProjectDocumentationComponent },
      { path: 'founder', component: ProjectFounderComponent },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnauthenticatedRoutingModule {}
