import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TripTableComponent implements OnInit, AfterViewInit {
  constructor(private snackbar: MatSnackBar) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
    this.snackbar.open('snkack bar needs some style', null, {
      duration: 4000,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  columnsToDisplay = [
    'id',
    'title',
    'region',
    'activities',
    'status',
    'actions',
  ];
  columns = ['id', 'title', 'region'];
  expandedElement: PeriodicElement | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: string;
  title: string;
  region: string;
  activities: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `reviewed`,
  },
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `denied`,
  },
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `submitted`,
  },
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `reviewed`,
  },
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `reviewed`,
  },
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `reviewed`,
  },
  {
    title: '1',
    id: 'Hydrogen',
    region: 'california',
    activities: 'H',
    status: `reviewed`,
  },
];
