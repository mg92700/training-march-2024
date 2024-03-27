import { TestBed } from '@angular/core/testing';

import { VersionUpdateService } from './version-update.service';

describe('VersionUpdateService', () => {
  let service: VersionUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersionUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
