import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutQueryComponent } from './payout-query/payout-query.component';
import { TechQueryComponent } from './tech-query/tech-query.component';
import { MyTicketComponent } from './my-ticket/my-ticket.component';

const routes: Routes = [
  {
    path: 'payout',
    component: PayoutQueryComponent
  },
  {
    path: 'techquery',
    component: TechQueryComponent
  },
  {
    path: 'myticket',
    component: MyTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpDeskRoutingModule { }
