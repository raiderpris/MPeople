/*Déclaration des modules*/
import { NgModule } from '@angular/core';
//UniversalModule charge BrowserModule, HttpModule et JsonModule (à placer en 1er dans l'import)
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';
import { LoginModule } from './components/login/login.module';

/*Déclaration des composants*/
import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';

/*Déclaration des services, providers*/
import { Logger } from 'angular2-logger/core';

@NgModule({

    imports: [
        UniversalModule,
        LoginModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ])
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        Logger
    ],
    exports: [
        AppComponent
    ]

})

export class AppModule {


}