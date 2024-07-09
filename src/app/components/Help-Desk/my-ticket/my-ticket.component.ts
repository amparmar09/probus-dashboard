import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import * as moment from 'moment';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-my-ticket',
  standalone: true,
  imports: [CommonModule, FlatpickrModule, SharedModule],
  templateUrl: './my-ticket.component.html',
  styleUrl: './my-ticket.component.scss'
})
export class MyTicketComponent {
  @ViewChild('startDateInput') startDateInput: ElementRef | any;
  @ViewChild('endDateInput') endDateInput: ElementRef | any;
  maxdate: Date = new Date();
  dateValue = moment(new Date()).format('YYYY-MM-DD');
  breadCrumbItems: any[] = [];


  ngOnInit(): void {
    /** @note this is used for the breadcrumb */
    this.breadCrumbItems = [
      { label: 'Help Desk' },
      { label: 'My Ticket', active: true }
    ];
  }


  /**
 * @note This function is used to open the date picker
 * @param inputElement 
 */
  openCalendar(inputElement: any) {
    if (inputElement === 'startDate') {
      const flatpickrInstance = this.startDateInput.nativeElement._flatpickr;
      if (flatpickrInstance) {
        flatpickrInstance.open();
      }
    } else {
      const flatpickrInstance = this.endDateInput.nativeElement._flatpickr;
      if (flatpickrInstance) {
        flatpickrInstance.open();
      }
    }
  }

}
