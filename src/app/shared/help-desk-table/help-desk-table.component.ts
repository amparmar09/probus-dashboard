import { Component, Input, ViewChild } from '@angular/core';
import { CommonDailogComponent } from '../dailog/common-dailog/common-dailog.component';
import { MatPaginator } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-help-desk-table',
    templateUrl: './help-desk-table.component.html',
    styleUrl: './help-desk-table.component.scss'
})
export class HelpDeskTableComponent {
    @Input() displayedColumns: any;
    @Input() data: any
    @ViewChild(MatPaginator) paginator: MatPaginator | any;
    dataSource: any
    page: any = 1;
    pageSize: any = 3;
    startIndex: number = 0;
    endIndex: number = 3;
    totalRecords: number = 0;
    paginationDatas: any;


    constructor(private modelService: NgbModal) { }

    ngOnInit(): void {

    }

    openModel(event: any) {
        console.log('EVENT::', event)
    }

    openDialog(data: any) {

        const dialogRef = this.modelService.open(CommonDailogComponent, { size: 'lg', centered: true, scrollable: true });
        dialogRef.componentInstance.dialogData = {
            data: data,
            type: 'payout'
        };
    }


    /**
    * Pagination
    */
    changePage() {

    }
}
