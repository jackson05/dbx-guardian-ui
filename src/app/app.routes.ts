import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { DbxworkspacesComponent } from './core/dbxworkspaces/dbxworkspaces.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path: 'workspaces',
    component: DbxworkspacesComponent

  }
];
