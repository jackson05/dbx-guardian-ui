import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PieController,
  LineController,
  LineElement,
  PointElement,
  ArcElement
} from 'chart.js';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

// Register required components in Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PieController,
  LineController,
  ArcElement
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule here
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  clusterStatusChart: Chart | undefined;
  jobFailuresChart: Chart | undefined;
  clusterStartFailureChart: Chart | undefined;

  // Array of workspaces for the select dropdown
  workspaces = [
    { workspace_id: 2078642893713512.12, workspace_name: ' dbwrokspace1' },
    { workspace_id: 2078642893713514.14, workspace_name: ' clave dbwspace' },
    { workspace_id: 2078642893713515.15, workspace_name: ' internal' },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.createClusterStatusChart();
    this.createJobFailuresChart();
    this.createClusterStartFailureChart();
  }

  ngOnDestroy(): void {
    // Destroy charts to avoid memory leaks
    this.clusterStatusChart?.destroy();
    this.jobFailuresChart?.destroy();
    this.clusterStartFailureChart?.destroy();
  }

  createClusterStatusChart(): void {
    const clusterStatusCtx = this.elementRef.nativeElement.querySelector('#clusterStatusChart');
    this.clusterStatusChart = new Chart(clusterStatusCtx, {
      type: 'bar',
      data: {
        labels: ['Running', 'Stopped'],
        datasets: [{
          label: 'Cluster Status',
          data: [0, 2],
          backgroundColor: ['#4BC0C0', '#FF6384'],
          borderColor: ['#4BC0C0', '#FF6384'],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Cluster Status (Running vs Stopped)'
          }
        }
      }
    });
  }

  createJobFailuresChart(): void {
    const jobFailuresCtx = this.elementRef.nativeElement.querySelector('#jobFailuresChart');
    this.jobFailuresChart = new Chart(jobFailuresCtx, {
      type: 'pie',
      data: {
        labels: ['1 Job(s) Failed', '2 Job(s) Pending', '0 Job(s) Running', '0 Job(s) Succeeded'],
        datasets: [{
          label: 'Job Failures',
          data: [1, 2,0, 0],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Job Termination Status'
          }
        }
      }
    });
  }

  createClusterStartFailureChart(): void {
    const clusterStartFailureCtx = this.elementRef.nativeElement.querySelector('#clusterStartFailureChart');
    this.clusterStartFailureChart = new Chart(clusterStartFailureCtx, {
      type: 'line',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [{
          label: 'Cluster Start up Failure',
          data: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: '#4BC0C0',
          borderWidth: 3,
          tension: 0.4,
          pointBackgroundColor: '#4BC0C0',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Cluster start up Failure'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Clusters failed'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Months'
            }
          }
        }
      }
    });
  }
}
