import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [CommonModule, InitialRoutingModule],
})
export class InitialModule {}
