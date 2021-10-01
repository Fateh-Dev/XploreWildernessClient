import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payment-history-table',
  templateUrl: './payment-history-table.component.html',
  styleUrls: ['./payment-history-table.component.scss'],
})
export class PaymentHistoryTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'amount', 'method', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private snackbar: MatSnackBar) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
    this.snackbar.open(
      'Two line text string. One to two lines is preferable on mobile and tablet.',
      'close',
      {
        duration: 10000,
        panelClass: ['success-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  date: string;
  amount: number;
  method: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    date: '10-Mai-2021',
    amount: 3500,
    method: 'Visa card ending in 2004',
  },
  {
    id: 1,
    date: '10-Mai-2021',
    amount: 3500,
    method: 'Visa card ending in 2004',
  },
  {
    id: 1,
    date: '10-Mai-2021',
    amount: 3500,
    method: 'Visa card ending in 2004',
  },
  {
    id: 1,
    date: '10-Mai-2021',
    amount: 3500,
    method: 'Visa card ending in 2004',
  },
  {
    id: 1,
    date: '10-Mai-2021',
    amount: 3500,
    method: 'Visa card ending in 2004',
  },
  {
    id: 1,
    date: '10-Mai-2021',
    amount: 3500,
    method: 'Visa card ending in 2004',
  },
];
