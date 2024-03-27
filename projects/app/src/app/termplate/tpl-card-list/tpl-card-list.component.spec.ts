import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplCardListComponent } from './tpl-card-list.component';

describe('TplCardListComponent', () => {
  let component: TplCardListComponent<any>;
  let fixture: ComponentFixture<TplCardListComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TplCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TplCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
