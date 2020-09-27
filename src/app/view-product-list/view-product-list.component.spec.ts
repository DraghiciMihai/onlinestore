import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductListComponent } from './view-product-list.component';

describe('ViewProductListComponent', () => {
  let component: ViewProductListComponent;
  let fixture: ComponentFixture<ViewProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
