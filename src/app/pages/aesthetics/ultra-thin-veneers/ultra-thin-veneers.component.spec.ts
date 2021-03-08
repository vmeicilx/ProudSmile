import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraThinVeneersComponent } from './ultra-thin-veneers.component';

describe('UltraThinVeneersComponent', () => {
  let component: UltraThinVeneersComponent;
  let fixture: ComponentFixture<UltraThinVeneersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltraThinVeneersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltraThinVeneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
