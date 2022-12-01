import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookParentComponent } from './hook-parent.component';

describe('HookParentComponent', () => {
  let component: HookParentComponent;
  let fixture: ComponentFixture<HookParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HookParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
