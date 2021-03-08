import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomWhiteningComponent } from './zoom-whitening.component';

describe('ZoomWhiteningComponent', () => {
  let component: ZoomWhiteningComponent;
  let fixture: ComponentFixture<ZoomWhiteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomWhiteningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomWhiteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
