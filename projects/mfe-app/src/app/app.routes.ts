import { Routes } from '@angular/router';
import { ModuleFederationComponent } from './module-federation/module-federation.component';

export const routes: Routes = [
    {path: '', redirectTo: 'todo-list', pathMatch: 'full'},
    {path: 'todo-list', component: ModuleFederationComponent}
];
