/*Déclaration des modules*/
import { NgModule } from '@angular/core';

/*Déclaration des composants*/
import { HeaderComponent } from './header.component';


@NgModule({

    imports: [],
    declarations: [
        HeaderComponent,
    ],
    providers: [],
    exports: [
        HeaderComponent,
    ]
})

export class MainModule {

}