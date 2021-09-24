import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTrayComponent } from './cart-tray.component';

describe('CartTrayComponent', () => {
  let component: CartTrayComponent;
  let fixture: ComponentFixture<CartTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
