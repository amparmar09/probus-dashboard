import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpDeskRoutingModule } from './help-desk-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PayoutQueryComponent } from './payout-query/payout-query.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule, NgbProgressbarModule, NgbTypeaheadModule, NgbPaginationModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';



@NgModule({
  declarations: [PayoutQueryComponent],
  imports: [
    CommonModule,
    HelpDeskRoutingModule,
    SharedModule,
    FlatpickrModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    SimplebarAngularModule
  ],
})
export class HelpDeskModule { }
