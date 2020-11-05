import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMetaComponent } from './cart-meta.component';

describe('CartMetaComponent', () => {
  let component: CartMetaComponent;
  let fixture: ComponentFixture<CartMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
