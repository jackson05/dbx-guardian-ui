import { Workspace } from './../../dbxworkspaces/workspace';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClusterService {
  private baseUrl = 'http://localhost:8080/api/cluster'; // Update with your Spring Boot URL

  constructor(private http: HttpClient) {}

   workspaceId='2078642893713512.12';

  getNodeTypes(workspaceId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/node-types/${workspaceId}`);
  }

  getSparkVersions(workspaceId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/spark-versions/${workspaceId}`);
  }
}
