import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacespaFacialComponent } from './facespa-facial.component';

describe('FacespaFacialComponent', () => {
  let component: FacespaFacialComponent;
  let fixture: ComponentFixture<FacespaFacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacespaFacialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacespaFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
