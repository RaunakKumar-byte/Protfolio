import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaTrackerComponent } from './dsa-tracker.component';

describe('DsaTrackerComponent', () => {
  let component: DsaTrackerComponent;
  let fixture: ComponentFixture<DsaTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsaTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
