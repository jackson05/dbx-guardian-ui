import { FALSE } from './../../../../node_modules/sass/types/legacy/function.d';

import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {  MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

export type MenuItems = {
  icon: string;
  label: string;
  route: string;
};

  @Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatButtonModule,
      MatMenuModule,
      RouterOutlet,
      CommonModule

    ],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']

  })
export class SidebarComponent {
  title="DBX Guardian"

   // collapse sidenav
   collapsed = signal(false);

   sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');


  menuItems= signal<MenuItems[]>([
    {label: 'Dashboard', route: '/dashboard', icon: 'dashboard'},
    {label: 'DBX Workspaces', route: '/workspaces', icon: 'folder'},
    {label: 'Clusters', route: '/clusters', icon: 'storage'},
    {label: 'Pipelines', route: '/pipeline', icon: 'alt_route'},
    {label:'Notebooks', route: '/notebooks', icon: 'book'},
    {label: 'Jobs', route: '/jobs', icon: 'build'},
    {label: 'Migration', route: '/migration', icon: 'sync'},
    {label: 'Settings', route: '/settings', icon: 'settings'},
  ]
  )

  subMenuItems= signal<MenuItems[]>([
    {label: 'Settings', route: '/settings', icon: 'settings'},
    {label: 'Users', route: '/users', icon: 'people'},
    {label: 'Logout', route: '/logout', icon: 'exit_to_app'}
  ]
  )


}
