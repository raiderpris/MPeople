/*Déclaration des modules*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*Déclaration des composants*/
import { LoginComponent } from './login.component';
import { AccountCreationComponent } from '../accountCreation/accountCreation.component';
import { MainComponent } from '../main/main.component';
import { NavMenuComponent } from '../navmenu/navmenu.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'account-creation', component: AccountCreationComponent },
            { path: 'main', component: MainComponent }
        ])
        ],
    declarations: [
        LoginComponent,
    ],
    bootstrap: [],
    providers: [],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {

}