import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridToFullScreenComponent } from './grid-to-full-screen.component';

describe('GridToFullScreenComponent', () => {
  let component: GridToFullScreenComponent;
  let fixture: ComponentFixture<GridToFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridToFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridToFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
