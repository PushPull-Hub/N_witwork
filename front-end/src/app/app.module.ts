import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthenticatedModule } from './components/authenticated/authenticated.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuthenticatedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
