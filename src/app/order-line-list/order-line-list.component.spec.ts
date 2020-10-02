import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLineListComponent } from './order-line-list.component';

describe('OrderLineListComponent', () => {
  let component: OrderLineListComponent;
  let fixture: ComponentFixture<OrderLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
