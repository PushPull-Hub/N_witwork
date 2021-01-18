import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [SpinnerComponent, NavbarComponent, PostComponent, CreatePostComponent],
  imports: [CommonModule],
})
export class SharedModule {}