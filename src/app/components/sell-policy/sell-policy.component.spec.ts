import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPolicyComponent } from './sell-policy.component';

describe('SellPolicyComponent', () => {
  let component: SellPolicyComponent;
  let fixture: ComponentFixture<SellPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
