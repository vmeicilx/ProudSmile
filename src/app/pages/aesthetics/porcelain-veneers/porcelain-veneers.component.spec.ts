import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcelainVeneersComponent } from './porcelain-veneers.component';

describe('PorcelainVeneersComponent', () => {
  let component: PorcelainVeneersComponent;
  let fixture: ComponentFixture<PorcelainVeneersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcelainVeneersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcelainVeneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
