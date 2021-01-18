import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [NavigationComponent, MainComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
