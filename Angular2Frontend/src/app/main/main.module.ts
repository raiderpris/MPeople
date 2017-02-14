/*Déclaration des modules*/
import { NgModule } from '@angular/core';

/*Déclaration des composants*/
import { MainComponent } from './main.component';
import { NavMenuComponent } from '../navmenu/navmenu.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({

    imports: [],
    declarations: [
        MainComponent,
        NavMenuComponent,
        HeaderComponent,
    ],
    providers: [],
    exports: [
        MainComponent,
    ]
})

export class MainModule {

}