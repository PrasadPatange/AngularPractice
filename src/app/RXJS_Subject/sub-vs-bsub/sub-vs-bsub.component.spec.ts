import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVsBsubComponent } from './sub-vs-bsub.component';

describe('SubVsBsubComponent', () => {
  let component: SubVsBsubComponent;
  let fixture: ComponentFixture<SubVsBsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubVsBsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVsBsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
