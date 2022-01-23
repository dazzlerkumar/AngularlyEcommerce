import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryPageComponent } from './ordersummary-page.component';

describe('OrdersummaryPageComponent', () => {
  let component: OrdersummaryPageComponent;
  let fixture: ComponentFixture<OrdersummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersummaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
