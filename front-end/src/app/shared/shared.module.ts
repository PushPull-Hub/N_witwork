import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
    PostComponent,
    CreatePostComponent,
    ErrorPageComponent,
  ],
  imports: [CommonModule],
  exports: [
    SpinnerComponent,
    NavbarComponent,
    PostComponent,
    CreatePostComponent,
    ErrorPageComponent,
  ],
})
export class SharedModule {}
