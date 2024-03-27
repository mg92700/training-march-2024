import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VersionUpdateModalComponent } from './version-update-modal/version-update-modal.component';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionUpdateService {
  private askInProgress = false;

  constructor(private dialog: MatDialog, private swUpdate: SwUpdate) {}

  checkForUpdate() {
    if (!this.swUpdate.isEnabled) return;
    this.swUpdate.versionUpdates.pipe(
      filter((versionEvent) => versionEvent.type === 'VERSION_DETECTED' && !this.askInProgress)
    ).subscribe(() => {
      this.openUpdateModal();
    });
  }

  private openUpdateModal() {
    this.askInProgress = true;
    const dialogRef = this.dialog.open(VersionUpdateModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.askInProgress = false;
      if (result === 'download') {
        // Logique pour télécharger la nouvelle version
        await this.swUpdate.activateUpdate()
        document.location.reload();
      }
    });
  }
}
