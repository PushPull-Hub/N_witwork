import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedUserRoutingModule } from './authenticated-user-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonModule,
    AuthenticatedUserRoutingModule,
  ],
})
export class AuthenticatedUserModule {}
