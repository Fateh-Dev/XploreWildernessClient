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
    'Id',
    'Title',
    'Region',
    'Activities',
    'Status',
    'Actions',
  ];
  columns = ['Id', 'Title', 'Region'];
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
  Id: string;
  Title: string;
  Region: string;
  Activities: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '1',
    Region: 'california',
    Activities: 'H',
    Status: 'Reviewed',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '2',
    Region: 'california',
    Activities: 'H',
    Status: 'Denied',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '1',
    Region: 'california',
    Activities: 'H',
    Status: 'Submitted',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '2',
    Region: 'california',
    Activities: 'H',
    Status: 'Denied',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '3',
    Region: 'california',
    Activities: 'H',
    Status: 'Submitted',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '4',
    Region: 'california',
    Activities: 'H',
    Status: 'Denied',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '3',
    Region: 'california',
    Activities: 'H',
    Status: 'Submitted',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '3',
    Region: 'california',
    Activities: 'H',
    Status: 'Denied',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '5',
    Region: 'california',
    Activities: 'H',
    Status: 'Submitted',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '3',
    Region: 'california',
    Activities: 'H',
    Status: 'Denied',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '4',
    Region: 'california',
    Activities: 'H',
    Status: 'Submitted',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '2',
    Region: 'california',
    Activities: 'H',
    Status: 'Reviewed',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '2',
    Region: 'california',
    Activities: 'H',
    Status: 'Active',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '2',
    Region: 'california',
    Activities: 'H',
    Status: 'Active',
  },
  {
    Title: '1Monterey, Ca Carmel and the Carmel and thermel and the',
    Id: '1',
    Region: 'california',
    Activities: 'H',
    Status: 'Reviewed',
  },
];
