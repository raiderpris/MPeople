/*Déclaration des modules*/
import { NgModule } from '@angular/core';


/*Déclaration des composants*/
import { AccountCreationComponent } from '../accountCreation/accountCreation.component';

@NgModule({
    imports: [],
    declarations: [
        AccountCreationComponent,
    ],
    bootstrap: [],
    providers: [],
    exports: [
        AccountCreationComponent
    ]
})

export class AccountCreationModule {

}