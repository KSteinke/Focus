import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Home } from './features/home/home';

export const routes: Routes = [
     { path: 'app', component: Dashboard },
     { path: '', component: Home}
];
