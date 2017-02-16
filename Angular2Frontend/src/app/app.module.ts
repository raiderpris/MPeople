import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouter } from './app.router';

import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { AccountCreationComponent } from './account/accountCreation/accountCreation.component';
import { MainComponent } from './main/main.component';
import { NavMenuComponent } from './main/navmenu/navmenu.component';

import { Logger } from 'angular2-logger/core';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      AccountCreationComponent,
      MainComponent,
      NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [
      Logger
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
