import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameDayVeneersComponent } from './same-day-veneers.component';

describe('SameDayVeneersComponent', () => {
  let component: SameDayVeneersComponent;
  let fixture: ComponentFixture<SameDayVeneersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameDayVeneersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameDayVeneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
