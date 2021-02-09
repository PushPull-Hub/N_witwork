import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';

import { ProjectFounderComponent } from './project-founder/project-founder.component';
import { ProjectDocumentationComponent } from './project-documentation/project-documentation.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UnauthenticatedWrapperComponent } from './unauthenticated-wrapper.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    ProjectDocumentationComponent,
    ProjectFounderComponent,
    UnauthenticatedWrapperComponent,
  ],
  imports: [CommonModule, UnauthenticatedRoutingModule],
})
export class UnauthenticatedModule {}
