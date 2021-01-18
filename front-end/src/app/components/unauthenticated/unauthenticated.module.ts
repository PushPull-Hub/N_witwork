import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProjectDocumentationComponent } from './project-documentation/project-documentation.component';
import { ProjectFounderComponent } from './project-founder/project-founder.component';


@NgModule({
  declarations: [WelcomePageComponent, SignInComponent, SignUpComponent, ResetPasswordComponent, ProjectDocumentationComponent, ProjectFounderComponent],
  imports: [
    CommonModule,
    UnauthenticatedRoutingModule
  ]
})
export class UnauthenticatedModule { }
