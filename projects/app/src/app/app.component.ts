import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VersionUpdateService } from './version-update.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [HeaderComponent, RouterOutlet]
})
export class AppComponent {
  title = 'app';

  private versionUpdateService = inject(VersionUpdateService);

  ngOnInit(): void {
    this.versionUpdateService.checkForUpdate();
  }
}
