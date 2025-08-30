import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home},
  { path: 'Home', component: Home},
  { path: 'app', component: Dashboard },
  { path: '**', component: Dashboard } // pasuje na wszystko inne
];
