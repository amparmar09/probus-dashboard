import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutQueryComponent } from './payout-query.component';

describe('PayoutQueryComponent', () => {
  let component: PayoutQueryComponent;
  let fixture: ComponentFixture<PayoutQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayoutQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayoutQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
