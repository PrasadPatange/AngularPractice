import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomp1Component } from './subcomp1.component';

describe('Subcomp1Component', () => {
  let component: Subcomp1Component;
  let fixture: ComponentFixture<Subcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
