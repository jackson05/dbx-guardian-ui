import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button'; // Add this for button styles

import { ClusterTableComponent } from './cluster-table/cluster-table.component';

@Component({
  selector: 'app-cluster',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,  // Ensure MatButtonModule is imported for the button styling
    ClusterTableComponent
  ],
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  clusterForm!: FormGroup;

  // Mock workspaces data
  workspaces: { workspace_id: string, workspace_name: string }[] = [
    { workspace_id: "2078642893713512.12", workspace_name: "dbwrokspace1" },
    { workspace_id: "2078642893713514.14", workspace_name: "clave dbwspace" },
    { workspace_id: "2078642893713515.15", workspace_name: "internal" },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clusterForm = this.fb.group({
      workspaceId: ['', Validators.required],  // Add workspaceId form control
      clusterType: ['', Validators.required],
      clusterName: ['', Validators.required],  // Add clusterName form control
      sparkVersion: ['', Validators.required],
      nodeTypeId: ['', Validators.required]
    });
  }


onClusterTypeChange(clusterType: string): void {
    // Preserve workspaceId and clusterType values while resetting other fields
    const { workspaceId, clusterType: currentClusterType } = this.clusterForm.value;

    // Reset form but keep workspaceId and clusterType
    this.clusterForm.reset({
      workspaceId,
      clusterType: currentClusterType,
    });

    // Clear existing dynamic controls
    Object.keys(this.clusterForm.controls).forEach(control => {
      if (!['workspaceId', 'clusterType', 'clusterName', 'sparkVersion', 'nodeTypeId'].includes(control)) {
        this.clusterForm.removeControl(control);
      }
    });

    // Add common fields if not already present
    this.clusterForm.addControl('clusterName', this.fb.control('', Validators.required));
    this.clusterForm.addControl('sparkVersion', this.fb.control('', Validators.required));
    this.clusterForm.addControl('nodeTypeId', this.fb.control('', Validators.required));

    // Add dynamic fields based on the selected cluster type
    if (clusterType === 'MachineLearningCluster') {
      this.clusterForm.addControl('useMlRuntime', this.fb.control(false));
      this.clusterForm.addControl('numWorkers', this.fb.control(0, [Validators.required, Validators.min(1)]));
    } else if (clusterType === 'SingleNodeCluster') {
      this.clusterForm.addControl(
        'sparkConf',
        this.fb.group({
          key: ['', Validators.required],
          value: ['', Validators.required],
        })
      );
    } else if (clusterType === 'SingleNodeWithKindCluster') {
      this.clusterForm.addControl('kind', this.fb.control('', Validators.required));
      this.clusterForm.addControl('isSingleNode', this.fb.control(false));
    }
  }



  createCluster() {
    console.log(this.clusterForm.value);
  }
}
