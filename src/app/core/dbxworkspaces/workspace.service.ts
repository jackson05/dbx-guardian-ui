import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workspace } from './workspace';

@Injectable({
  providedIn: 'root', // This ensures it's available throughout the app
})

export class WorkspaceService {

  private baseUrl = 'http://localhost:8089/v1/api/workspaces';



  constructor(  private  _httpClient : HttpClient) {
    console.log('WorkspaceService initialized');
  }

  getworkspaces(sort: string, order: string, page: number): Observable<{ items: Workspace[], total_count: number }> {
    const url = `${this.baseUrl}?sort=${sort}&order=${order}&page=${page + 1}`;
    return this._httpClient.get<{ items: Workspace[], total_count: number }>(url);

  }

  addWorkspace(workspace: Workspace): Observable<Workspace> {
    return this._httpClient.post<Workspace>(this.baseUrl, workspace);
  }

}

