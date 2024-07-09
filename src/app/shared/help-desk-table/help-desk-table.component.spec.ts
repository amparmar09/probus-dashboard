import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskTableComponent } from './help-desk-table.component';

describe('HelpDeskTableComponent', () => {
  let component: HelpDeskTableComponent;
  let fixture: ComponentFixture<HelpDeskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDeskTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpDeskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
