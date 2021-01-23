import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplantDenturesComponent } from './implant-dentures.component';

describe('ImplantDenturesComponent', () => {
  let component: ImplantDenturesComponent;
  let fixture: ComponentFixture<ImplantDenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplantDenturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplantDenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
