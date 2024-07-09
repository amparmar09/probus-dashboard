import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component pages
import { DashboardComponent } from "./dashboards/dashboard/dashboard.component";
import { SellPolicyComponent } from '../components/sell-policy/sell-policy.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  { path: 'help', loadChildren: () => import('../components/Help-Desk/help-desk.module').then(m => m.HelpDeskModule) },
  {
    path: 'policy',
    component: SellPolicyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
