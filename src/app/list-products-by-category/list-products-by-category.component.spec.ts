import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsByCategoryComponent } from './list-products-by-category.component';

describe('ListProductsByCategoryComponent', () => {
  let component: ListProductsByCategoryComponent;
  let fixture: ComponentFixture<ListProductsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
