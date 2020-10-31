import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpreadComponent } from './card-spread.component';

describe('CardSpreadComponent', () => {
  let component: CardSpreadComponent;
  let fixture: ComponentFixture<CardSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSpreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
