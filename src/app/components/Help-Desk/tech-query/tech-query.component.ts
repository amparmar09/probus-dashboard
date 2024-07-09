import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MatDialog } from '@angular/material/dialog';
import { CommonDailogComponent } from 'src/app/shared/dailog/common-dailog/common-dailog.component';
import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tech-query',
  standalone: true,
  imports: [CommonModule, FlatpickrModule, SharedModule],
  templateUrl: './tech-query.component.html',
  styleUrl: './tech-query.component.scss'
})
export class TechQueryComponent {
  @ViewChild('startDateInput') startDateInput: ElementRef | any;
  @ViewChild('endDateInput') endDateInput: ElementRef | any;
  maxdate: Date = new Date();
  dateValue = moment(new Date()).format('YYYY-MM-DD');
  loading: boolean = false;
  breadCrumbItems: any[] = [];



  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
    /** @note this is used for the breadcrumb */
    this.breadCrumbItems = [
      { label: 'Help Desk' },
      { label: 'Tech Query', active: true }
    ];
  }


  openDialog() {
    const dialogRef = this.modalService.open(CommonDailogComponent);
    dialogRef.componentInstance.dialogData = {
      type: 'techQuery'
    };
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
