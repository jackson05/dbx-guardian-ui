import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { WorkspaceService } from '../workspace.service';
import { Workspace } from '../workspace';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [
    MatPaginator,
    MatSort,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.css'],
})
export class WorkspaceListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['workspaceID', 'name', 'url', 'cloudService', 'created', 'modified', 'status', 'tokenExpiration', 'actions'];
  data: Workspace[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
   this.workspaceService.getworkspaces('name', 'asc', 0).subscribe(data => {
      this.data = data.items;
      this.resultsLength = data.total_count;

    });

   this.getworkspaces('name', 'asc', 0);
  }

  private getworkspaces(sort: string, order: string, page: number): Observable<{ items: Workspace[]; total_count: number }> {
    return this.workspaceService.getworkspaces(sort, order, page);
  }

  ngAfterViewInit() {
   // display data
   this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
   merge(this.sort.sortChange, this.paginator.page)
     .pipe(
       startWith({}),
       switchMap(() => {
         this.isLoadingResults = true;
         return this.workspaceService.getworkspaces(this.sort.active, this.sort.direction, this.paginator.pageIndex).pipe(
           catchError(() => observableOf(null))
         );
       }),
       map(data => {
         this.isLoadingResults = false;
         this.isRateLimitReached = data === null;
         if (data === null) return [];
         this.resultsLength = data.total_count;
         return data.items;
       })
     )
     .subscribe(data => (this.data = data));
  }

}
