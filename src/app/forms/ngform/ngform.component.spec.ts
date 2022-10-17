import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformComponent } from './ngform.component';

describe('NgformComponent', () => {
  let component: NgformComponent;
  let fixture: ComponentFixture<NgformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
