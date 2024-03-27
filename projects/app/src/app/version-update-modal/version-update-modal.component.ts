import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-version-update-modal',
  templateUrl: './version-update-modal.component.html',
  styleUrls: ['./version-update-modal.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
  ]
})
export class VersionUpdateModalComponent {

  private dialogRef = inject(MatDialogRef);

  cancel() {
    this.dialogRef.close();
  }
  download() {
    this.dialogRef.close('download');
  }
}
