import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductItemComponent } from './shop-product-item.component';

describe('ShopProductItemComponent', () => {
  let component: ShopProductItemComponent;
  let fixture: ComponentFixture<ShopProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
