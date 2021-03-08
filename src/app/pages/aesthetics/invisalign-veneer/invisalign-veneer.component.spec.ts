import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisalignVeneerComponent } from './invisalign-veneer.component';

describe('InvisalignVeneerComponent', () => {
  let component: InvisalignVeneerComponent;
  let fixture: ComponentFixture<InvisalignVeneerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvisalignVeneerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisalignVeneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
