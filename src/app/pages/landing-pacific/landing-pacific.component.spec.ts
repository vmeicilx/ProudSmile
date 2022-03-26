import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPacificComponent } from './landing-pacific.component';

describe('LandingPacificComponent', () => {
  let component: LandingPacificComponent;
  let fixture: ComponentFixture<LandingPacificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPacificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPacificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
