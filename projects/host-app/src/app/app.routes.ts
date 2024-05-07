import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ProfileComponent } from './profile/profile.component';

const MFEAPPURL  = 'http://localhost:4300/remoteEntry.js'
export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'mfe', 
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: MFEAPPURL,
                remoteName: 'mfeApp',
                exposedModule: './MF-module'
            }).then( m => m.ModuleFederationModule).catch( err => console.log(err));
        }
    }];
