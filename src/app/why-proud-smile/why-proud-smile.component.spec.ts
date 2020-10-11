import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyProudSmileComponent } from './why-proud-smile.component';

describe('WhyProudSmileComponent', () => {
  let component: WhyProudSmileComponent;
  let fixture: ComponentFixture<WhyProudSmileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyProudSmileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyProudSmileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
