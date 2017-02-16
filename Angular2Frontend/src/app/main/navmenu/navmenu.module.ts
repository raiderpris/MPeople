/*Déclaration des modules*/
import { NgModule } from '@angular/core';


/*Déclaration des composants*/
import { NavMenuComponent } from '../navmenu/navmenu.component';

@NgModule({
    imports: [],
    declarations: [
        NavMenuComponent,
    ],
    bootstrap: [],
    providers: [],
    exports: [
        NavMenuComponent,
    ]
})

export class NavMenuModule {

}