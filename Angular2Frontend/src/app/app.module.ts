import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';

import { Logger } from 'angular2-logger/core';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*RouterModule.forRoot([
       { path: '', redirectTo: 'app-login', pathMatch: 'full' },
       { path: 'app-login', component: LoginComponent },
       { path: '**', redirectTo: 'app-login' }
      ])*/
  ],
  providers: [
      Logger
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
