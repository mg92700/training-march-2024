import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionUpdateModalComponent } from './version-update-modal.component';

describe('VersionUpdateModalComponent', () => {
  let component: VersionUpdateModalComponent;
  let fixture: ComponentFixture<VersionUpdateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersionUpdateModalComponent]
    });
    fixture = TestBed.createComponent(VersionUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
