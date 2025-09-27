import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPlaygroundComponent } from './tech-playground.component';

describe('TechPlaygroundComponent', () => {
  let component: TechPlaygroundComponent;
  let fixture: ComponentFixture<TechPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
