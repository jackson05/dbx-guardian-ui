import { Component, inject, NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspaceDialogComponent } from './workspace-dialog/workspace-dialog.component';
import { WorkspaceService } from './workspace.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { Workspace } from './workspace';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CustomInterceptor } from '../token/token.custom.interceptor';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dbxworkspaces',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule,
    MatButtonModule,
    CommonModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule

  ],

  templateUrl: './dbxworkspaces.component.html',
  styleUrls: ['./dbxworkspaces.component.css']
})
export class DbxworkspacesComponent {

  constructor() {
    console.log('DbxworkspacesComponent initialized');
  }

  services = [
    {
      name: 'Azure',
      image: 'https://swimburger.net/media/ppnn3pcl/azure.png',
      link: '/workspaces/azure'
    },
    {
      name: 'AWS',
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png',
      link: '/workspaces/aws'
    },
    {
      name: 'GCP',
      image: 'https://static-00.iconduck.com/assets.00/google-cloud-icon-512x412-8rnz6wkz.png',
      link: '/workspaces/gcp'
    }
  ];

  readonly dialog = inject(MatDialog);
  private workspaceService = inject(WorkspaceService);

  openDialog() {
    const workspaceData = new Workspace();
    const dialogRef = this.dialog.open(WorkspaceDialogComponent, {
      width: '700px',
      data: workspaceData,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.workspaceService.addWorkspace(result).subscribe({
          next: response => {
            console.log('Workspace added successfully:', response);
          },
          error: error => {
            console.error('Error adding workspace:', error);
          },
        });

      } else {
        console.log('Dialog was closed without saving');
      }

    });
  }
}
