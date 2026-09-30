import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { DbxworkspacesComponent } from './core/dbxworkspaces/dbxworkspaces.component';
import { NgModel } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { authGuard } from './auth/guard/auth.guard';
import { SettingsComponent } from './core/settings/settings.component';
import { ClusterComponent } from './core/cluster/cluster.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'workspaces',
    component: DbxworkspacesComponent,
    canActivate: [authGuard]
  },

  {
    path: 'clusters',
    component: ClusterComponent,
    canActivate: [authGuard]
  },


  {path: 'settings',
    component: SettingsComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
