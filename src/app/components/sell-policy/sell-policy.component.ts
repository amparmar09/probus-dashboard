import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-sell-policy',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sell-policy.component.html',
  styleUrl: './sell-policy.component.scss'
})
export class SellPolicyComponent {
  breadCrumbItems: any[] = [];

  ngOnInit(): void {
    /** @note this is used for the breadcrumb */
    this.breadCrumbItems = [
      { label: 'Sell Policy' },
      { label: 'Policy', active: true }
    ];
  }

}
