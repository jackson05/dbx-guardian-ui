import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Workspace } from '../workspace';

@Component({
  selector: 'app-workspace-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './workspace-dialog.component.html',
  styleUrls: ['./workspace-dialog.component.css'],
})
export class WorkspaceDialogComponent implements OnInit {
  form!: FormGroup;
  workspace!: Workspace;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Workspace,
    private dialogRef: MatDialogRef<WorkspaceDialogComponent>
  ) {
    this.workspace = data; // Assign the injected data to workspace
  }

  ngOnInit() {
    this.form = this.fb.group({
      workspaceId: [this.workspace.workspaceId, Validators.required],
      workspaceName: [this.workspace.workspaceName, Validators.required],
      workspaceUrl: [this.workspace.workspaceUrl, Validators.required],
      cloudProvider: [this.workspace.cloudProvider, Validators.required],
      description: [this.workspace.description],
    });
  }

  save() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.dialogRef.close(formData);
    } else {
      console.log('Form is invalid!');
    }
  }

  cancel() {
    this.dialogRef.close(); // Close without saving
  }
}
