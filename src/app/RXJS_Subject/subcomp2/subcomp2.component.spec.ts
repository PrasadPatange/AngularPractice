import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomp2Component } from './subcomp2.component';

describe('Subcomp2Component', () => {
  let component: Subcomp2Component;
  let fixture: ComponentFixture<Subcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
