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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
    // this.snackbar.open(
    //   'Two line text string. One to two lines is preferable on mobile and tablet.',
    //   'close',
    //   {
    //     duration: 10000,
    //     panelClass: ['success-snackbar'],
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //   }
    // );
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
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
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '1',
    region: 'california',
    activities: 'H',
    status: 'reviewed',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '2',
    region: 'california',
    activities: 'H',
    status: 'denied',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '1',
    region: 'california',
    activities: 'H',
    status: 'submitted',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '2',
    region: 'california',
    activities: 'H',
    status: 'denied',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '3',
    region: 'california',
    activities: 'H',
    status: 'submitted',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '4',
    region: 'california',
    activities: 'H',
    status: 'denied',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '3',
    region: 'california',
    activities: 'H',
    status: 'submitted',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: 'num',
    region: 'california',
    activities: 'H',
    status: 'denied',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '5',
    region: 'california',
    activities: 'H',
    status: 'submitted',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '3',
    region: 'california',
    activities: 'H',
    status: 'denied',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: 'num',
    region: 'california',
    activities: 'H',
    status: 'submitted',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '2',
    region: 'california',
    activities: 'H',
    status: 'reviewed',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: 'num',
    region: 'california',
    activities: 'H',
    status: 'active',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '2',
    region: 'california',
    activities: 'H',
    status: 'active',
  },
  {
    title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    id: '1',
    region: 'california',
    activities: 'H',
    status: 'reviewed',
  },
];
