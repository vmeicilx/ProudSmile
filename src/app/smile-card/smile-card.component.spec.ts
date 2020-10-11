import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileCardComponent } from './smile-card.component';

describe('SmileCardComponent', () => {
  let component: SmileCardComponent;
  let fixture: ComponentFixture<SmileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
