import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

interface Cluster {
  cluster_id: string;
  cluster_name: string;
  creator_user_name: string;
  state: string;
  spark_version: string;
  driver_node_type_id: string;
  num_workers?: number;
  terminated_time?: string;
  termination_reason?: {
    code: string;
    type: string;
    parameters?: Record<string, string>;
  };
}

@Component({
  selector: 'app-cluster-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  templateUrl: './cluster-table.component.html',
  styleUrls: ['./cluster-table.component.css']
})
export class ClusterTableComponent {
  displayedColumns: string[] = [
    'clusterName',
    'creatorUserName',
    'state',
    'spark_version',
    'driverNodeType',
    'numWorkers',
    'terminatedTime',
    'actions'
  ];

  dataSource: MatTableDataSource<Cluster>;

  clustersData: Cluster[] = [
    {
      cluster_id: "0114-121114-v7ea69po",
      cluster_name: "initial",
      creator_user_name: "admin@mngenvmcap870512.onmicrosoft.com",
      state: "TERMINATED",
      spark_version: "14.3.x-scala2.12",
      driver_node_type_id: "Standard_DS3_v2",
      num_workers: 4,
      terminated_time: "2025-01-14 13:51:18 CET",
      termination_reason: {
        code: "AZURE_QUOTA_EXCEEDED_EXCEPTION",
        type: "CLIENT_ERROR",
        parameters: {
          azure_error_code: "SkuNotAvailable",
          azure_error_message: "The requested VM size for resource is not available.",
        }
      }
    },
    {
      cluster_id: "0110-215327-y4ajopj",
      cluster_name: "System Administrator's Cluster",
      creator_user_name: "admin@mngenvmcap870512.onmicrosoft.com",
      state: "TERMINATED",
      spark_version: "15.4.x-scala2.12",
      driver_node_type_id: "Standard_D4ds_v5",
      num_workers: 8,
      terminated_time: "2025-01-10 22:53:40 CET"
    }
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.clustersData);
  }

  startCluster(cluster: Cluster) {
    console.log(`Starting cluster: ${cluster.cluster_name}`);
  }

  stopCluster(cluster: Cluster) {
    console.log(`Stopping cluster: ${cluster.cluster_name}`);
  }

  restartCluster(cluster: Cluster) {
    console.log(`Restarting cluster ${cluster.cluster_name}`);
  }
}
