import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { AccountCreationComponent } from './account/accountCreation/accountCreation.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'account-creation',
        component: AccountCreationComponent,
    },
    {
        path: 'main',
        component: MainComponent,
    },
];

export const AppRouter = RouterModule.forRoot(routes);
