import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedUserRoutingModule } from './authenticated-user-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CommonModule,
    AuthenticatedUserRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class AuthenticatedUserModule {}
