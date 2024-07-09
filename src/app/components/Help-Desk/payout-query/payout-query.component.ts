import { Component, ElementRef, ViewChild } from '@angular/core';

import * as moment from 'moment';
import { CommonDailogComponent } from 'src/app/shared/dailog/common-dailog/common-dailog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-payout-query',
  templateUrl: './payout-query.component.html',
  styleUrl: './payout-query.component.scss'
})
export class PayoutQueryComponent {
  @ViewChild('startDateInput') startDateInput: ElementRef | any;
  @ViewChild('endDateInput') endDateInput: ElementRef | any;
  displayedColumns: string[] = ['Ticket Status', 'Ticket No', 'Vehicle No', 'Query', 'product', 'Company', 'orderNo', 'more',];
  data: any[] = [
    {
      ticketStatus: 'Open',
      ticketNo: 'TCKT001',
      query: 'Query details here',
      activityPoints: 100,
      policyNo: 'POL001',
      orderNo: 'ORD001',
      product: 'Insurance Product A',
      company: 'ABC Insurance Co.',
      vehicleNo: 'ABC1234',
      businessType: 'Retail',
      policyStartDate: '2024-01-01',
      insuredName: 'John Doe',
      outCommitted: 'Yes',
      paidAmount: 5000,
      recoPayment: 'Received',
      utrNumber: 'UTR123456789',
      paymentDate: '2024-06-15',
      region: 'North',
      posName: 'Jane Smith',
      posMobile: '9876543210',
      paymentRefCode: 'PAY123',
      panNumber: 'ABCDE1234F',
      pospRemark: 'POS remarks here',
      amRemarks: 'AM remarks here',
      opRemarks: 'OP remarks here',
      supportTeamRemarks: 'Support team remarks here',
      policyCreationMode: 'Online',
      createdDate: '2024-05-01',
      approvedDateByRM: '2024-05-10',
      posDocumentFile: 'document1.pdf',
      posDocumentFile1: 'document2.pdf'
    },
    {
      ticketStatus: 'Closed',
      ticketNo: 'TCKT002',
      query: 'Another query details',
      activityPoints: 75,
      policyNo: 'POL002',
      orderNo: 'ORD002',
      product: 'Insurance Product B',
      company: 'XYZ Insurance Co.',
      vehicleNo: 'XYZ5678',
      businessType: 'Corporate',
      policyStartDate: '2023-12-01',
      insuredName: 'Alice Johnson',
      outCommitted: 'No',
      paidAmount: 8000,
      recoPayment: 'Pending',
      utrNumber: '',
      paymentDate: '',
      region: 'South',
      posName: 'Michael Brown',
      posMobile: '8765432109',
      paymentRefCode: 'PAY456',
      panNumber: 'FGHIJ5678K',
      pospRemark: 'POS feedback here',
      amRemarks: '',
      opRemarks: 'Closed with resolution',
      supportTeamRemarks: '',
      policyCreationMode: 'Offline',
      createdDate: '2024-04-15',
      approvedDateByRM: '2024-04-20',
      posDocumentFile: 'document3.pdf',
      posDocumentFile1: ''
    }
  ];
  maxdate: Date = new Date();
  dateValue = moment(new Date()).format('YYYY-MM-DD');
  loading: boolean = false;

  breadCrumbItems: any[] = [];


  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    /** @note this is used for the breadcrumb */
    this.breadCrumbItems = [
      { label: 'Help Desk' },
      { label: 'Payout Query', active: true }
    ];
  }



  openDialog() {
    const dialogRef = this.modalService.open(CommonDailogComponent);
    dialogRef.componentInstance.dialogData = {
      data: this.data,
      type: 'payoutAdd'
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





