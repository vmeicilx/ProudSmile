import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulArchRehabilitationComponent } from './ful-arch-rehabilitation.component';

describe('FulArchRehabilitationComponent', () => {
  let component: FulArchRehabilitationComponent;
  let fixture: ComponentFixture<FulArchRehabilitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulArchRehabilitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulArchRehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
