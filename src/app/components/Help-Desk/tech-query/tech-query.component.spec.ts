import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechQueryComponent } from './tech-query.component';

describe('TechQueryComponent', () => {
  let component: TechQueryComponent;
  let fixture: ComponentFixture<TechQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechQueryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TechQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
