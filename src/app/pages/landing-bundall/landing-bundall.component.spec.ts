import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBundallComponent } from './landing-bundall.component';

describe('LandingBundallComponent', () => {
  let component: LandingBundallComponent;
  let fixture: ComponentFixture<LandingBundallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBundallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBundallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
