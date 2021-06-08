import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  NavbarsWrapperComponent,
  DefaultNavbarComponent,
  OnloadingNavbarComponent,
  LoggedUserNavbarComponent,
} from './navbar/index';

import { FooterComponent } from './footer/index';
import { RightSliderComponent } from './right-slider/index';

@NgModule({
  declarations: [
    NavbarsWrapperComponent,
    DefaultNavbarComponent,
    OnloadingNavbarComponent,
    LoggedUserNavbarComponent,
    FooterComponent,
    RightSliderComponent,
  ],
  imports: [CommonModule, IonicModule, FontAwesomeModule],
  exports: [NavbarsWrapperComponent, FooterComponent, RightSliderComponent],
})
export class LayoutsModule {}
