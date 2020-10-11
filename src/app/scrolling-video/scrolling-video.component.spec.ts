import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingVideoComponent } from './scrolling-video.component';

describe('ScrollingVideoComponent', () => {
  let component: ScrollingVideoComponent;
  let fixture: ComponentFixture<ScrollingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
