import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-common-dailog',
  templateUrl: './common-dailog.component.html',
  styleUrl: './common-dailog.component.scss'
})
export class CommonDailogComponent {
  dailogData: any;
  isChecked: boolean = true;
  tableData: any;
  data: any
  loading: boolean = true;
  @Input() dialogData: any;

  constructor(
    public activeModal: NgbActiveModal
  ) {

  }

  ngOnInit(): void {
  }


  ngAfterContentInit(): void {
    this.tableData = this.dialogData.data
  }

  onCloseClick(): void {
  }

  onSubmitClick(): void {
  }

  toggleChange(event: any) {
    this.isChecked = event.target.checked;
  }

}
