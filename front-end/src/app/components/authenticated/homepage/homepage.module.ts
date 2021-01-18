import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavigationComponent, MainComponent],
  imports: [CommonModule, HomepageRoutingModule, SharedModule],
})
export class HomepageModule {}
