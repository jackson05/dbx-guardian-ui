import { Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { DbxworkspacesComponent } from './core/dbxworkspaces/dbxworkspaces.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path:'dashboard',
    component: DashboardComponent,
    // loadChildren: () => import('./core/dashboard/dashboard.component').then(m => m.DashboardComponent)
    //loadChildren: () => import('./core/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'workspaces',
    component: DbxworkspacesComponent

  }
];
