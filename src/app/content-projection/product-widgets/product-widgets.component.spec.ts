import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWidgetsComponent } from './product-widgets.component';

describe('ProductWidgetsComponent', () => {
  let component: ProductWidgetsComponent;
  let fixture: ComponentFixture<ProductWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
