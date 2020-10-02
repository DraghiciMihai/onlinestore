import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductAdminComponent } from './update-product-admin.component';

describe('UpdateProductAdminComponent', () => {
  let component: UpdateProductAdminComponent;
  let fixture: ComponentFixture<UpdateProductAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
