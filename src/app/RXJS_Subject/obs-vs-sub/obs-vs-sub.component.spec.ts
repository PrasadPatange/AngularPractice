import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsVsSubComponent } from './obs-vs-sub.component';

describe('ObsVsSubComponent', () => {
  let component: ObsVsSubComponent;
  let fixture: ComponentFixture<ObsVsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsVsSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsVsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
